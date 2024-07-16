import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import VerifyAccount from '../pages/VerifyAccount'
import ThanksPage from '../pages/ThanksPage'
import VerificationForm from '../pages/ValidationPage'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/validation' element={<VerificationForm />} />
            <Route path='/account/verification' element={<VerifyAccount />} />
            <Route path='/thanks' element={<ThanksPage />} />
        </Routes>
    </div>
  )
}

export default AppRoutes