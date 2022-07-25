import React from 'react'
import { BiEdit } from "react-icons/bi";
import { BsEyeSlash, BsTrash } from "react-icons/bs";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions/category'

export default function ItemCategory({ item, setCategoryName, setCategoryId, showModal, token }) {
    const dispatch = useDispatch()

    const submit = () => {
        confirmAlert({
            message: 'Bạn có muốn xóa không',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(actions.deleteCategoryStart({ token, categoryId: item._id }))
                },
                {
                    label: 'No',
                    onClick: () => setCategoryId('')
                }
            ]
        });
    };

    return (
        <div className="flex bg-[#101f42] rounded-md px-3 py-1.5 items-center justify-between">
            <p className="text-white text-lg font-normal">{item.categoryName}</p>
            <div>
                <button
                    className="p-2 text-xl text-white"
                    title='Ẩn'
                >
                    <BsEyeSlash />
                    {/* <BsEye /> */}
                </button>
                <button
                    onClick={() => {
                        showModal()
                        setCategoryName(item.categoryName)
                        setCategoryId(item._id)
                    }}
                    className="p-2 text-xl text-orange-500"
                    title="Edit"
                >
                    <BiEdit />
                </button>
                <button
                    className="p-2 text-xl text-red-600"
                    onClick={submit}
                    title="Delete"
                >
                    <BsTrash />
                </button>
            </div>
        </div>
    )
}
