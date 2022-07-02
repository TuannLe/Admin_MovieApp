import React from 'react'

function SignIn() {
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
                    className="p-1.5 outline-none bg-[#222] text-white text-base rounded mb-1.5"
                />
                <input
                    type="text"
                    placeholder='Password'
                    className="p-1.5 outline-none bg-[#222] text-white text-base rounded"
                />
                <button
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
