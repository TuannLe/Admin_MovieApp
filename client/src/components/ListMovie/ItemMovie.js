import { useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import * as actions from '../../redux/actions/movie'

export default function ItemMovie({ item, formData, setFormData, showModal, token }) {
    const dispatch = useDispatch()
    const [isHover, setIsHover] = useState(false)
    const directors = item.directors
    const casts = item.casts

    const handleEdit = (e) => {
        e.preventDefault()
        showModal()
        setFormData({
            ...formData,
            _id: item._id,
            movieName: item.movieName,
            docId: item.docId,
            categoryId: item.categoryId,
            description: item.description,
            directors: directors.toString(),
            casts: casts.toString(),
            status: item.status,
        })
    }

    const handleDelete = (e) => {
        e.preventDefault()
        confirmAlert({
            message: 'Bạn có muốn xóa không',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => dispatch(actions.deleteMovieStart({ token, movieId: item._id }))
                },
                {
                    label: 'No',
                }
            ]
        });
    }



    return (
        <Link
            to={{
                pathname: `/detail-movie`
            }}
            state={{ item }}
            className="bg-[#192c54] rounded-xl flex flex-col overflow-hidden"
            onMouseEnter={() => {
                setIsHover(!isHover)
            }}
            onMouseLeave={() => {
                setIsHover(!isHover)
            }}
        >
            <div
                style={{
                    backgroundImage: `url("${`data:image/png;base64,${item.poster}`}")`
                }}
                className="flex justify-center items-center h-64 bg-cover rounded-xl overflow-hidden m-3"
            >
                <BsPlayCircle className="text-gray-300 text-4xl" />
            </div>
            {
                isHover ? (
                    <div className="flex items-center justify-center flex-1 mt-3">
                        <button
                            onClick={handleEdit}
                            className="flex flex-1 items-center justify-center h-full text-white text-2xl bg-orange-500"
                        >
                            <BiEdit />
                        </button>
                        <button
                            onClick={handleDelete}
                            className="flex flex-1 items-center justify-center h-full text-white text-2xl bg-red-700"
                        >
                            <BsTrash />
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col px-3 pb-3">
                        <div className="flex justify-start">
                            <p className="text-white text-base font-medium truncate">{item.movieName}</p>
                        </div>
                        <div className="flex justify-between text-sm text-gray-400">
                            <p>{item.category[0].categoryName}</p>
                            <p>2h35p</p>
                        </div>
                    </div>
                )
            }
        </Link>
    )
}
