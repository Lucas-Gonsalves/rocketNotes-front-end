import {  Routes, Route } from 'react-router-dom';

import { Details } from '../pages/Details';
import { Home } from '../pages/Home';
import { New } from '../pages/New';
import { Profile  } from '../pages/Profile';


export function AppRoutes() {

  return(

    <Routes>

      <Route 
        path="/"
        element={<Home />} 
      />

      <Route 
        path="/New" 
        element={<New /> }
      />

      <Route 
        path="/Profile" 
        element={<Profile /> }
      />

      <Route 
        path="/Details/:note_id" 
        element={<Details /> }
      />

    </Routes>

  );
};