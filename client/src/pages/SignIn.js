import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import * as actions from '../redux/actions/auth'

function SignIn() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    if (token) {
        return <Navigate to="/" replace />
    }

    const handleSignIn = () => {
        if (!email) {
            setMessage('Please enter your email')
        } else if (!password) {
            setMessage('Please enter your password')
        } else {
            dispatch(actions.SignInStart({ email, password }))
        }
    }

    return (
        <div
            className="w-full h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${require("../assets/images/loginImage.jpg")})`
            }}
        >
            <div className="flex flex-col bg-black w-3/12 px-3 py-8 rounded-lg">
                <h1 className="text-white font-medium text-3xl mb-5">Sign In</h1>
                <input
                    type="text"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-1.5 outline-none bg-[#222] text-white text-base rounded mb-1.5"
                />
                <input
                    type="password"
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-1.5 outline-none bg-[#222] text-white text-base rounded"
                />
                <p className="text-red-400">{message}</p>
                <button
                    onClick={handleSignIn}
                    className="py-2 bg-red-500 text-white font-medium rounded mt-5"
                >
                    Sign In
                </button>
                <button className='text-gray-300 p-2.5'>Forgot your password?</button>
            </div>
        </div>
    )
}

export default SignIn
