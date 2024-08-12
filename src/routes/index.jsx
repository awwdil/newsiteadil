import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import ValidationPage from '../pages/ValidationPage'; // Corrected the import name
import LoginModal from '../modal/LoginModal'; // Added import for LoginModal
import ThanksPage from '../pages/ThanksPage';

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/validation' element={<Validation />} />
            <Route path='/' element={<LoginModal />} /> {/* Added route for LoginModal */}
            <Route path='/thanks' element={<Thanks />} />
        </Routes>
    </div> 
  );
}

export default AppRoutes;
