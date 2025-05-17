import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { FaEnvelope, FaGithub, FaLock, FaUserTie } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const Ragister = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { setUser, signUpwithemail, signInWithGoogle, userUpdateProfile, expLocation } = use(AuthContext)

    const handlesignup = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photo = e.target.photoUrl.value

        signUpwithemail(email, password).then((res) => {
            const user = res.user;
            userUpdateProfile({ displayName: name, photoURL: photo }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate(expLocation || '/')
            }).catch(() => {
                setError('Invalid Credintial')
            })
        }
        ).catch(() => {
            setError('Invalid Credintial')
        })
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle().then(() => {
            navigate(expLocation || '/')
        }).catch(() => {
            setError('Sarver Did not response')
        })
    }
    return (
        <div>
            <Helmet>
                <title>JobHunt | Registration</title>
            </Helmet>
            <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-base-100 px-4 py-10">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#3C65F5]">Register Your Account</h2>

                    <form onSubmit={handlesignup} className="space-y-4">
                        <div>
                            {error && <span className='text-red-600'>{error}</span>}
                        </div>
                        <span className='text-lg text-gray-600 py-3'>Full Name</span>
                        <label className="input validator w-full">
                            <FaUserTie className='text-base-content' />
                            <input name='name' type="text" placeholder="John Wick" required />
                        </label>

                        <span className='text-lg text-gray-600 py-3'>Email</span>
                        <label className="input validator w-full">
                            <FaEnvelope className='text-base-content' />
                            <input name='email' type="email" placeholder="mail@site.com" required />
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
                        <p className="validator-hint hidden">
                            Must be more than 8 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        <span className='text-lg text-gray-600 py-3'>Photo Url</span>
                        <label className="input validator w-full">
                            <CgProfile className='text-base-content' />
                            <input name='photoUrl' type="text" placeholder="Input photo url" required />
                        </label>

                        <div className="form-control mt-6 mx-auto space-y-2">
                            <button type='submit' className="w-full btn bg-[#3C65F5] text-white  border-[#e5e5e5]">
                                <FaEnvelope className='text-white' />
                                SignUp with Credintial
                            </button>
                        </div>
                    </form>
                    <div className="form-control mt-6 mx-auto space-y-2">
                        
                        <button onClick={handleGoogleSignUp} className=" w-full btn bg-white text-black border-[#e5e5e5]">
                            <FcGoogle className='text-base-content' />
                            SignUp with Google
                        </button>

                        <button className="w-full btn bg-black text-white border-black">
                            <FaGithub className='text-white' />
                            SignUp with GitHub
                        </button>
                    </div>

                    <p className="text-center mt-4 text-sm text-base-content">
                        Already have an account?{' '}
                        <Link to="/auth/signin" className="text-primary font-medium hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Ragister;