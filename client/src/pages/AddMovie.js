import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from 'react-icons/io5'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px 15px',
        width: '350px',
        display: 'flex',
    },
};

export default function AddMovie() {
    const [isShowing, setIsShowing] = useState(false)

    const showModal = () => {
        setIsShowing(true)
    }

    const hideModal = () => {
        setIsShowing(false)
    }

    return (
        <div className="flex flex-row w-full h-full bg-[#192c54] p-5">
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
                        onClick={showModal}
                    >
                        <AiOutlinePlus />
                    </button>
                    <Modal
                        isOpen={isShowing}
                        onRequestClose={hideModal}
                        style={customStyles}
                    >
                        <div className="flex flex-col flex-1">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-medium">Create new category</h2>
                                <button
                                    onClick={hideModal}
                                    className=" text-xl h-full pl-3"
                                >
                                    <IoCloseOutline />
                                </button>
                            </div>
                            <form>
                                <input
                                    className="w-full text-base bg-[#f1f3f4] rounded px-2 py-1 outline-none"
                                    placeholder="Enter Category"
                                />
                            </form>
                            <div className="flex justify-end">
                                <button
                                    className='bg-[#254ef8] mt-5 rounded py-1.5 px-8 text-white font-medium'
                                >
                                    Add
                                </button>
                            </div>

                        </div>
                    </Modal>
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
