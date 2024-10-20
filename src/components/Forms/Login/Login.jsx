import React from 'react'
import { Button } from '../../Buttons/Buttons'

function Login() {
    return (
        <>
        <div className="login-form">
            <div className="login-form__title">
                Login
            </div>
            <div className="login-form__image">
                <img src='/assets/images/item-1.png' alt='login-image' />
            </div>
            <div className="login-form__greetings">
            Welcome back
            </div>
            <div className="login-form__main-container">
                <form>
                    <input text="text" placeholder='Username' />
                    <input  text="password" placeholder='Password' />
                    <button className='forgot-pass'>Forgot Password?</button>
                    <Button text={'Login'} variant={'btn-primary'} />
                </form>
            </div>
            <div className="login-form__signup">
                <div className="login-form__divide">
                    OR
                </div>
                <button className='signIn-icon'>
                <span class="icon-google">
                <span class="path1"></span>
                <span class="path2"></span>
                <span class="path3"></span>
                <span class="path4"></span>
                </span>
                 &nbsp; Continue with Google
                </button>

                <button className='signIn-icon'>
                <span class="icon-apple">
                </span>
                 &nbsp; Continue with Apple
                </button>
            </div>
        </div>
        </>
    )
}

export default Login
