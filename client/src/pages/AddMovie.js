import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../redux/actions/movie'

export default function AddMovie() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const fileInputRef = useRef();
    const categories = useSelector((state) => state.category.categories)
    // const movies = useSelector((state) => state.movie.movies)


    const [data, setData] = useState({
        movieName: '',
        link: '',
        poster: '',
        categoryId: '',
        description: '',
        directors: '',
        casts: '',
        status: true,
    })
    const [warn, setWarn] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.movieName) {
            setWarn('Please enter movie name')
        } else if (!data.link) {
            setWarn('Please enter link movie')
        } else if (!data.directors) {
            setWarn('Please enter director name')
        } else if (!data.casts) {
            setWarn('Please enter cast name')
        } else if (!data.categoryId) {
            setWarn('Please enter select category')
        } else if (!data.description) {
            setWarn('Please enter description')
        } else if (!data.poster) {
            setWarn('Please choose poster image')
        }
        dispatch(actions.addMovieStart({ data, token }))
        console.log('hihih')
        setData({
            ...data,
            movieName: '',
            link: '',
            poster: '',
            categoryId: '',
            description: '',
            directors: '',
            casts: '',
            status: true,
        })
    }

    return (
        <div className="flex flex-row w-full h-full bg-[#192c54] p-5 rounded-tl-xl">
            <form className="flex flex-col space-y-2 w-1/3">
                <input
                    type="text"
                    placeholder="MovieName"
                    value={data.movieName}
                    onChange={(e) => setData({ ...data, movieName: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Link"
                    value={data.link}
                    onChange={(e) => setData({ ...data, link: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Directors"
                    value={data.directors}
                    onChange={(e) => setData({ ...data, directors: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Casts"
                    value={data.casts}
                    onChange={(e) => setData({ ...data, casts: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                {categories ? (
                    <select
                        className="rounded outline-none px-1 py-1.5"
                        value={data.categoryId}
                        onChange={(e) => setData({ ...data, categoryId: e.target.value })}
                    >
                        <option value="" selected disabled hidden>Select category</option>
                        {categories.map(item => {
                            return <option key={item._id} value={item._id}>{item.categoryName}</option>
                        })}
                    </select>
                ) : (
                    <div className="py-1">
                        <Link to='/list-category' className="px-5 py-1.5 text-[#101f42] rounded bg-white ">Add category</Link>
                    </div>
                )}
                <textarea
                    type="text"
                    placeholder="Description"
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                    rows={3}
                />
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    // className=" hidden"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file && file.type.substr(0, 5) === "image") {
                            setData({ ...data, poster: file })
                        }
                    }}
                />
                <div className="flex items-center mt-3 space-x-2">
                    <input id="check" defaultChecked={data.status} onChange={() => setData({ ...data, status: !data.status })} type="checkbox" />
                    <label htmlFor="check" className="text-gray-200">Show</label>
                </div>
                {
                    warn ? (
                        <p className="text-red-600 text-base">{warn}</p>
                    ) : (
                        ''
                    )
                }
                {/* {
                    message ? (
                        <p className="text-green-600 text-base">{message}</p>
                    ) : (
                        ''
                    )
                } */}
                <button
                    className='bg-[#254ef8] rounded text-white font-medium py-2 mt-10'
                    onClick={handleSubmit}
                >
                    Upload
                </button>
            </form>
            <div className="flex-1 ml-10">
                <video autoPlay="autoplay" controls="controls" width="100%" height="100%">
                    {/* <source src={movies[movies.length - 1].link1080} type='video/mp4' /> */}
                    <source src='' type='video/mp4' />
                </video>
            </div>
        </div >
    )
}
