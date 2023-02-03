import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    
    const submitted = () => {
        navigate('login');
    }
    return (
        <React.Fragment>
            <div>
                <input className='log-input mb-3' type='text' placeholder='User Name' />
            </div>
            <div>
                <input className='log-input mb-3' type='text' placeholder='New password' />
            </div>
            <div>
                <input className='log-input mb-2' type='text' placeholder='Confirm password' />
            </div>
            <button className='btn-auth my-3' onClick={submitted}>Sign In</button>
            <div className='text-center mt-3'>You have an account? <Link to='/login' className='text-link'>Log in</Link></div>
        </React.Fragment>
    )
}

export default SignIn;