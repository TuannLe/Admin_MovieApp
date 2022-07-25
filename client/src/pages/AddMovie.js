import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";


export default function AddMovie() {
    return (
        <div className="flex flex-row w-full h-full bg-[#192c54] p-5 rounded-tl-xl">
            <div className="flex flex-col space-y-2 w-1/3">
                <input
                    type="text"
                    placeholder="MovieName"
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Link"
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Director"
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Cast"
                    className="text-base rounded outline-none px-2 py-1"
                />
                <div className="flex flex-row items-center">
                    <select className="rounded outline-none px-1 py-1.5 flex-1">
                        <option value="Trinh tham">Tình cảm</option>
                        <option value="Trinh tham">Trinh thám</option>
                        <option value="Trinh tham">Hàng động</option>
                        <option value="Trinh tham">Kinh dị</option>
                    </select>
                    <button
                        className="text-white text-xl px-3 h-full"
                    >
                        <AiOutlinePlus />
                    </button>
                </div>
                <textarea
                    type="text"
                    placeholder="Description"
                    className="text-base rounded outline-none px-2 py-1"
                    rows={3}
                />
                <button
                    className='bg-[#254ef8] rounded text-white font-medium py-2 mt-10'
                >
                    Upload
                </button>
            </div>
            <div className="flex-1 ml-10">
                <video
                    width="100%" height="100%" controls
                >
                    <source src="" type='video/mp4' />
                </video>
            </div>
        </div >
    )
}
