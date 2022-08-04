import { useEffect } from 'react'
import ImageUsers from '../assets/images/ImageUsers.jpg'
import ImageCategory from '../assets/images/ImageCategory.jpg'
import ImageMovie from '../assets/images/ImageMovie.jpg'
import ItemMovie from '../components/Home/ItemMovie'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesStart } from '../redux/actions/movie'
import { getCategoriesStart } from '../redux/actions/category'


export default function Home() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.auth.currentUser.accessToken)

    useEffect(() => {
        dispatch(getMoviesStart({ token }))
        dispatch(getCategoriesStart({ token }))
    }, [token, dispatch])

    const data = useSelector((state) => state.movie.movies)
    return (
        <div className="w-full h-full bg-[#192c54] p-5 overflow-y-scroll rounded-tl-xl">
            <div className="flex space-x-8">
                <div className="flex flex-1 p-5 bg-gradient-to-r from-[#102042] to-[#1a338e] rounded-xl">
                    <img
                        src={ImageUsers}
                        alt="UserImg"
                        className="w-20 h-20 rounded-xl"
                    />
                    <div className="flex flex-col flex-1 items-center">
                        <p className="text-white text-lg font-medium">Accounts</p>
                        <p className="text-gray-400 text-4xl">30</p>
                    </div>
                </div>
                <div className="flex flex-1 p-5 bg-gradient-to-r from-[#102042] to-[#1a338e] rounded-xl">
                    <img
                        src={ImageMovie}
                        alt="UserImg"
                        className="w-20 h-20 rounded-xl"
                    />
                    <div className="flex flex-col flex-1 items-center">
                        <p className="text-white text-lg font-medium">Movies</p>
                        <p className="text-gray-400 text-4xl">20</p>
                    </div>
                </div>
                <div className="flex flex-1 p-5 bg-gradient-to-r from-[#102042] to-[#1a338e] rounded-xl">
                    <img
                        src={ImageCategory}
                        alt="UserImg"
                        className="w-20 h-20 rounded-xl"
                    />
                    <div className="flex flex-col flex-1 items-center">
                        <p className="text-white text-lg font-medium">Categories</p>
                        <p className="text-gray-400 text-4xl">10</p>
                    </div>
                </div>
            </div>
            <h1 className="text-white text-2xl font-medium mt-5 mb-2">Top 10</h1>
            <div className="bg-[#101f42] p-3 rounded-xl">
                <div className='grid grid-cols-5 gap-3'>
                    {data.map((item, i) => {
                        return (
                            <ItemMovie item={item} key={i} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
