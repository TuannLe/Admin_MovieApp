import React from 'react'
import { Link } from 'react-router-dom'
import { TbLayoutGridAdd, TbMovie } from "react-icons/tb";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5"
import { useSelector, useDispatch } from "react-redux"
import logo from '../../assets/images/logo.png'
import { logout } from '../../redux/actions/auth'

export default function Navbar() {
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const dispatch = useDispatch()

    if (!token) {
        return <></>
    }

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <div className="w-60 flex flex-col justify-between h-full px-3">
            <div className="flex flex-col">
                <img
                    src={logo}
                    alt="logo"
                    className="w-24 m-auto py-5"
                />
                <Link to="/" className="flex flex-row items-center text-white px-8 py-2">
                    <span className="w-8 text-2xl text-gray-400"><TbLayoutGridAdd /></span>
                    <span className="text-base font-medium">Home</span>
                </Link>
                <Link to="list-movie" className="flex flex-row items-center text-white px-8 py-2">
                    <span className="w-8 text-2xl text-gray-400"><TbMovie /></span>
                    <span className="text-base font-medium">Movies</span>
                </Link>
                <Link to="add-movie" className="flex flex-row items-center text-white px-8 py-2">
                    <span className="w-8 text-2xl text-gray-400"><AiOutlineVideoCameraAdd /></span>
                    <span className="text-base font-medium">Add Movie</span>
                </Link>
                <Link to="list-category" className="flex flex-row items-center text-white px-8 py-2">
                    <span className="w-8 text-2xl text-gray-400"><AiOutlineVideoCameraAdd /></span>
                    <span className="text-base font-medium">Categories</span>
                </Link>
            </div>
            <div className="mb-10">
                <button
                    onClick={handleLogout}
                    className="flex flex-row w-full items-center justify-center text-white bg-[#192c54] p-3 space-x-2 rounded-lg"
                >
                    <p className="font-medium">Log out</p>
                    <IoLogOutOutline className="text-2xl" />
                </button>
            </div>
        </div>
    )
}
