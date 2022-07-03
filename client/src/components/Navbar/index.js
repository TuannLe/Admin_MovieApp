import React from 'react'
import logo from '../../assets/images/logo.png'
import { TbLayoutGridAdd, TbMovie } from "react-icons/tb";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";

export default function index() {
    return (

        <div className="flex flex-col">
            <img
                src={logo}
                alt="logo"
                className="w-24 m-auto py-5"
            />
            <button className="flex flex-row items-center text-white px-8 py-2">
                <span className="w-8 text-2xl text-gray-400"><TbLayoutGridAdd /></span>
                <span className="text-base font-medium">Home</span>
            </button>
            <button className="flex flex-row items-center text-white px-8 py-2">
                <span className="w-8 text-2xl text-gray-400"><TbMovie /></span>
                <span className="text-base font-medium">List Movie</span>
            </button>
            <button className="flex flex-row items-center text-white px-8 py-2">
                <span className="w-8 text-2xl text-gray-400"><AiOutlineVideoCameraAdd /></span>
                <span className="text-base font-medium">Add Movie</span>
            </button>
            <img
                alt="avatar"
            />
        </div>
    )
}
