import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function ItemMovie({ item }) {
    return (
        <Link
            to="/detail-movie"
            className="bg-[#192c54] rounded-xl p-3"
        >
            <div
                style={{
                    backgroundImage: `url("${item.image}")`
                }}
                className="flex justify-center items-center w-full h-80 bg-cover rounded-xl overflow-hidden"
            >
                <BsPlayCircle className="text-gray-300 text-4xl" />
            </div>
            <div className="mt-2 flex justify-start">
                <p className="text-white text-base font-medium">{item.name}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
                <p>Hành động</p>
                <p>2h35p</p>
            </div>
        </Link>
    )
}
