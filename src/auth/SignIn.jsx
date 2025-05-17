import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEnvelope, FaGithub, FaLock, FaUserTie } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet-async';


const SignIn = () => {
    const [error, setError] = useState('')
    const { signInwithemail, signInWithGoogle } = use(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSignIn = (e) => {
        setError('')
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signInwithemail(email, password).then(() => {
            navigate(location.state || '/')
        }).catch(() => {
            setError('Invalid Email or Password')
        })
        console.log(email, password)
    }
    const handleGoogleSignIn = () => {
        setError('')
        signInWithGoogle().then(() => {
            navigate(location.state || '/')
        }).catch(() => {
            setError('Sarver Did not response')
        })
    }
    return (
        <div>
            <Helmet>
                <title>JobHunt | Sign In</title>
            </Helmet>
            <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-base-100 px-4 py-10">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#3C65F5]">SignIn to Your Account</h2>
                    <div>
                        {error && <span className='text-red-600'>{error}</span>}
                    </div>
                    <form onSubmit={handleSignIn} className="space-y-4">

                        <span className='text-lg text-gray-600 py-3'>Email</span>
                        <label className="input validator w-full">
                            <FaEnvelope className='text-base-content' />
                            <input name="email" type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>

                        <span className='text-lg text-gray-600 py-3'>Password</span>
                        <label className="input validator w-full">
                            <FaLock className='text-base-content' />
                            <input name='password' type="password" required placeholder="••••••••"
                                minlength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
                        </label>
                        <Link to={'/auth/forgot-password'}><p className="text-primary text-sm hover:underline">Forgot your Password</p></Link>
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        <div className="form-control mt-6 mx-auto space-y-2">
                            <button type='submit' className="w-full btn bg-[#3C65F5] text-white  border-[#e5e5e5]">
                                <FaEnvelope className='text-white' />
                                SignIn with Credintial
                            </button>
                        </div>
                    </form>
                    <div className="form-control mt-6 mx-auto space-y-2">
                        <button onClick={handleGoogleSignIn} className=" w-full btn bg-white text-black border-[#e5e5e5]">
                            <FcGoogle className='text-base-content' />
                            SignIn with Google
                        </button>

                        <button className="w-full btn bg-black text-white border-black">
                            <FaGithub className='text-white' />
                            SignIn with GitHub
                        </button>
                    </div>

                    <p className="text-center mt-4 text-sm text-base-content">
                        New on This Site?{' '}
                        <Link to="/auth/register" className="text-primary font-medium hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;