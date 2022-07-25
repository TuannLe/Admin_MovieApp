import React, { useEffect, useState } from 'react'
import ItemCategory from '../components/ListCategory/ItemCategory'
import { useDispatch, useSelector } from 'react-redux'
import Modal from 'react-modal'
import { IoCloseOutline } from 'react-icons/io5'
import * as actions from '../redux/actions/category'

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

export default function ListCategory() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const [isShowing, setIsShowing] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [status, setStatus] = useState(false)
    const [categoryId, setCategoryId] = useState('')

    useEffect(() => {
        dispatch(actions.getCategoriesStart({ token }))
    }, [token, dispatch])

    const showModal = () => {
        setIsShowing(true)
    }

    const hideModal = () => {
        setIsShowing(false)
    }

    const handleAddCategory = () => {
        dispatch(actions.addCategoryStart({ categoryName, status, token }))
    }

    const handleEditCategory = () => {
        dispatch(actions.editCategoryStart({ categoryName, status, token, _id: categoryId }))
        hideModal()
    }

    const categories = useSelector((state) => state.category.categories)

    return (
        <div className="w-full h-full bg-[#192c54] pt-5 pb-12 rounded-tl-xl overflow-hidden">
            <div className="flex justify-between items-center mb-3 px-5">
                <h1 className="text-white text-2xl font-medium">
                    List Category
                </h1>
                <input
                    className="w-64 bg-[#101f42] rounded-full text-white px-3 py-1.5 outline-none"
                    placeholder="Search"
                />
            </div>
            <div className="flex bg-[#101f42] p-5 rounded-tl-xl w-full h-full space-x-3">
                <div className="flex-1 bg-[#192c54] p-5 space-y-3 overflow-y-scroll rounded-md">
                    {categories.map((item, i) => {
                        return (
                            <ItemCategory key={i} item={item} setCategoryName={setCategoryName} setCategoryId={setCategoryId} showModal={showModal} token={token} />
                        )
                    })}
                </div>
                <div className="flex flex-col flex-1 bg-[#192c54] p-5 rounded-md">
                    <p className="text-white text-xl font-medium mb-5">Add category</p>
                    <input
                        type="text"
                        placeholder="CategoryName"
                        onChange={(e) => setCategoryName(e.target.value)}
                        className="text-base rounded outline-none px-2 py-1"
                    />
                    <div className="flex items-center mt-3 space-x-2">
                        <input id="check" defaultChecked={status} onChange={() => setStatus(!status)} type="checkbox" />
                        <label htmlFor="check" className="text-gray-400">Show</label>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={handleAddCategory}
                            className="bg-[#254ef8] mt-5 rounded py-1.5 px-10 text-white font-medium"
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <Modal
                    isOpen={isShowing}
                    onRequestClose={hideModal}
                    style={customStyles}
                >
                    <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-medium">Edit category</h2>
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
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                            />
                        </form>
                        <div className="flex justify-end">
                            <button
                                className='bg-[#254ef8] mt-5 rounded py-1.5 px-5 text-white font-medium'
                                onClick={handleEditCategory}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </Modal>
            </div>
        </div>
    )
}
