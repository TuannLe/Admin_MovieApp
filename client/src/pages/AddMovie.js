import React, { useCallback, useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../redux/actions/movie'

export default function AddMovie() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    // const [movieName, setMovieName] = useState('')
    // const [link, setLink] = useState('')
    // const [poster, setPoster] = useState('')
    // const [category, setCategory] = useState('')
    // const [description, setDescription] = useState('')
    // const [directors, setDirector] = useState('')
    // const [casts, setCasts] = useState('')
    // const [status, setStatus] = useState(true)

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

    // const handleSubmit = useCallback(() => {
    //     dispatch(actions.addMovieStart({ data,token }))
    // }, [data, token, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data, token)
    }

    return (
        <div className="flex flex-row w-full h-full bg-[#192c54] p-5 rounded-tl-xl">
            <form className="flex flex-col space-y-2 w-1/3">
                <input
                    type="text"
                    placeholder="MovieName"
                    onChange={(e) => setData({ ...data, movieName: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Link"
                    onChange={(e) => setData({ ...data, link: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Directors"
                    onChange={(e) => setData({ ...data, directors: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <input
                    type="text"
                    placeholder="Casts"
                    onChange={(e) => setData({ ...data, casts: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                />
                <select className="rounded outline-none px-1 py-1.5" onChange={(e) => setData({ ...data, categoryId: e.target.value })}>
                    <option value="Tinh cam">Tình cảm</option>
                    <option value="Trinh tham">Trinh thám</option>
                    <option value="Hanfh dodong">Hàng động</option>
                    <option value="kinh di">Kinh dị</option>
                </select>
                <textarea
                    type="text"
                    placeholder="Description"
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className="text-base rounded outline-none px-2 py-1"
                    rows={3}
                />
                <FileBase64
                    accept="image/*"
                    multiple={false}
                    type='file'
                    onDone={({ base64 }) => setData({ ...data, poster: base64 })}
                />
                <div className="flex items-center mt-3 space-x-2">
                    <input id="check" defaultChecked={data.status} onChange={() => setData({ ...data, status: !data.status })} type="checkbox" />
                    <label htmlFor="check" className="text-gray-200">Show</label>
                </div>
                <button
                    className='bg-[#254ef8] rounded text-white font-medium py-2 mt-10'
                    onClick={handleSubmit}
                >
                    Upload
                </button>
            </form>
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
