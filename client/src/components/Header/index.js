import React from 'react'
import avatar from '../../assets/images/avatar.jpg'

export default function index() {
    return (
        <div className="flex justify-end items-center w-full h-14 bg-[#1c3b6a] px-10">
            <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
            />
            <p className="text-white text-base font-medium ml-3">Username</p>
        </div>
    )
}
