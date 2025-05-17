import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { Helmet } from 'react-helmet-async';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPassword = () => {
    const [error, setError] = useState('')
    const hendleResetPassword = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        console.log(email)
        sendPasswordResetEmail(auth, email).then(() => {
            window.open('https://mail.google.com/', '_blank');
        }).catch(() => {
            setError('Invalid Credintial')
        })
    }
    return (
        <div>
            <Helmet>
                <title>JobHunt | Forgot Password</title>
            </Helmet>
            <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-base-100 px-4 py-10">
                <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#3C65F5]">Password reset email.</h2>
                    <form onSubmit={hendleResetPassword} className="space-y-4">
                        <div>
                            {error && <span className='text-red-600'>{error}</span>}
                        </div>
                        {/* Email */}
                        <span className='text-lg text-gray-600 py-3'>Email</span>
                        <label className="input validator w-full">
                            <FaEnvelope className='text-base-content' />
                            <input name="email" type="email" placeholder="mail@site.com" required />
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>

                        {/* Password */}

                        {/* signin button Button */}
                        <div className="form-control mt-6 mx-auto space-y-2">
                            <button type='submit' className="w-full btn bg-[#3C65F5] text-white  border-[#e5e5e5]">
                                <FaEnvelope className='text-white' />
                                Reset Password
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;