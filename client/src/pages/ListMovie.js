import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import { IoCloseOutline } from 'react-icons/io5'
import ItemMovie from '../components/ListMovie/ItemMovie'
import { updateMovieStart } from '../redux/actions/movie'

export default function ListMovie() {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px 15px',
            width: '650px',
            display: 'flex',
        },
    };
    const fileInputRef = useRef();
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const data = useSelector((state) => state.movie.movies)
    const categories = useSelector((state) => state.category.categories)
    const [isShowing, setIsShowing] = useState(false)
    const [warn, setWarn] = useState('')
    const [formData, setFormData] = useState({
        _id: '',
        movieName: '',
        docId: '',
        poster: '',
        categoryId: '',
        description: '',
        directors: '',
        casts: '',
        status: true,
    })

    const showModal = () => {
        setIsShowing(true)
    }

    const hideModal = () => {
        setIsShowing(false)
    }

    const handleEditMovie = (e) => {
        e.preventDefault()
        if (!formData.movieName) {
            setWarn('Please enter movie name')
        } else if (!formData.docId) {
            setWarn('Please enter docId movie')
        } else if (!formData.directors) {
            setWarn('Please enter director name')
        } else if (!formData.casts) {
            setWarn('Please enter cast name')
        } else if (!formData.categoryId) {
            setWarn('Please enter select category')
        } else if (!formData.description) {
            setWarn('Please enter description')
        } else if (!formData.poster) {
            setWarn('Please choose poster image')
        }
        setWarn('')
        dispatch(updateMovieStart({ formData, token }))
    }

    return (
        <div className="w-full h-full bg-[#192c54] pt-5 pb-12 rounded-tl-xl overflow-hidden">
            <div className="flex justify-between items-center mb-3 px-5">
                <h1 className="text-white text-2xl font-medium">
                    List Movie
                </h1>
                <div className="space-x-3 flex flex-row items-center">
                    <input
                        className="w-64 bg-[#101f42] rounded-full text-white px-3 py-1.5 outline-none"
                        placeholder="Search"
                    />
                    {categories ? (
                        <select className="bg-[#101f42] rounded-full text-white px-3 py-1.5 outline-none">
                            {categories.map(item => {
                                return <option key={item._id} value={item._id}>{item.categoryName}</option>
                            })}
                        </select>
                    ) : (
                        <Link to='/list-category' className="px-5 py-1.5 text-[#101f42] font-bold rounded-full bg-white ">Add category</Link>
                    )}
                </div>
            </div>
            <div className="bg-[#101f42] p-5 rounded-tl-xl overflow-y-scroll w-full h-full">
                <div className='grid grid-cols-6 gap-3'>
                    {data.map((item, i) => {
                        return (
                            <ItemMovie item={item} key={i} formData={formData} setFormData={setFormData} showModal={showModal} token={token} />
                        )
                    })}
                </div>
            </div>
            <Modal
                isOpen={isShowing}
                onRequestClose={hideModal}
                style={customStyles}
            >
                <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-2xl font-medium">Edit movie</h2>
                        <button
                            onClick={hideModal}
                            className=" text-xl h-full pl-3"
                        >
                            <IoCloseOutline />
                        </button>
                    </div>
                    <form className="flex flex-col space-y-2">
                        <div>
                            <label htmlFor="movieName" className="text-gray-900 text-xs">Movie name</label>
                            <input
                                id="movieName"
                                className="w-full text-base bg-[#f1f3f4] rounded px-2 py-1 outline-none"
                                value={formData.movieName}
                                onChange={(e) => setFormData({ ...formData, movieName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="docId" className="text-gray-900 text-xs">Doc id</label>
                            <input
                                id="docId"
                                className="w-full text-base bg-[#f1f3f4] rounded px-2 py-1 outline-none"
                                value={formData.docId}
                                onChange={(e) => setFormData({ ...formData, docId: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="directors" className="text-gray-900 text-xs">Directors</label>
                            <input
                                id="directors"
                                className="w-full text-base bg-[#f1f3f4] rounded px-2 py-1 outline-none"
                                value={formData.directors}
                                onChange={(e) => setFormData({ ...formData, directors: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="casts" className="text-gray-900 text-xs">Casts</label>
                            <input
                                id="casts"
                                className="w-full text-base bg-[#f1f3f4] rounded px-2 py-1 outline-none"
                                value={formData.casts}
                                onChange={(e) => setFormData({ ...formData, casts: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-900 text-xs">Category</label>
                            <select
                                className="rounded outline-none px-1 py-1.5 bg-[#f1f3f4]"
                                value={formData.categoryId}
                                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                            >
                                <option value="" selected disabled hidden>Select category</option>
                                {categories.map(item => {
                                    return <option key={item._id} value={item._id}>{item.categoryName}</option>
                                })}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="descriptions" className="text-gray-900 text-xs">Description</label>
                            <textarea
                                id="descriptions"
                                type="text"
                                placeholder="Description"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="text-base rounded outline-none bg-[#f1f3f4] px-2 py-1"
                                rows={6}
                            />
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            // className=" hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file && file.type.substr(0, 5) === "image") {
                                    setFormData({ ...formData, poster: file })
                                }
                            }}
                        />
                        <div className="flex items-center mt-3 space-x-2">
                            <input id="check" defaultChecked={formData.status} onChange={() => setFormData({ ...formData, status: !data.status })} type="checkbox" />
                            <label htmlFor="check" className="text-gray-900">Show</label>
                        </div>
                    </form>
                    {
                        warn ? (
                            <p className="text-red-600 text-base">{warn}</p>
                        ) : (
                            ''
                        )
                    }
                    <div className="flex justify-end">
                        <button
                            className='bg-[#254ef8] mt-5 rounded py-1.5 px-5 text-white font-medium'
                            onClick={handleEditMovie}
                        >
                            Submit
                        </button>
                    </div>

                </div>
            </Modal>
        </div>
    )
}
