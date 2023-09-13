import { createContext, useContext } from 'react'; 
import { api } from '../services/api';

import { useState, useEffect } from 'react';


const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [ data, setData ] = useState({});



  async function signIn({ email, password }) {
    

    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;


      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });


      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);


    }catch(error) {

      if(error.response) {
        alert(error.response.data.message);
      
      } else {
        alert("Não foi possível efetuar a autenticação.");
      };
      
    };
  };


  function signOut() {

    localStorage.removeItem("@rocketnotes:user");
    localStorage.removeItem("@rocketnotes:token");

    setData({});
  };
  

  useEffect(() => { //Authentication by LocalStorage

    const user = localStorage.getItem("@rocketnotes:user");
    const token = localStorage.getItem("@rocketnotes:token");


    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };

    setData({
      user: JSON.parse(user),
      token
    });

  }, []); 


  return (

    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      user: data.user
    }}
    >

      { children }

    </AuthContext.Provider>
  );
};


function useAuth() {
  const context = useContext(AuthContext);

  return context;
};


export {
  AuthProvider,
  useAuth
};