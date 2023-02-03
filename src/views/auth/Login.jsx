import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const submitted = () => {
        localStorage.setItem('token', 'login');
        window.location.reload();
        navigate('dashboard');
    }
    return (
        <React.Fragment>
            <div>
                <input className='log-input mb-3' type='text' placeholder='User ID' />
            </div>
            <div>
                <input className='log-input mb-2' type='text' placeholder='Password' />
            </div>
            <div className='text-end'><Link to='#' className='text-link fs-14'>Forget your password?</Link></div>
            <button className='btn-auth my-3' onClick={submitted}>Log In</button>
            <div className='text-center mt-3'>Create an account? <Link to='/signin' className='text-link'>Sign in</Link></div>
        </React.Fragment>
    )
}

export default Login;