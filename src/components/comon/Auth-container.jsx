import React from 'react'
import { Outlet } from 'react-router-dom';

function AuthContainer() {
  return (
    <div className='auth-page'>
            <div className="log-box">
                <div className='text-center mt-3 mb-5'>
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="17" />
                    </span>
                </div>
                <Outlet />
            </div>
            <div className='shadowOne'></div>
        </div>
  )
}

export default AuthContainer;