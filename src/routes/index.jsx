import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ValidationPage from '../pages/Validation'; // Corrected the import name
import LoginModal from '../pages/LoginModal'; // Added import for LoginModal
import ThanksPage from '../pages/Thanks';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/validation' element={<Validation />} />
            <Route path='/loginmodal' element={<LoginModal />} /> {/* Added route for LoginModal */}
            <Route path='/thanks' element={<Thanks />} />
        </Routes>
    </div> 
  );
}

export default AppRoutes;
