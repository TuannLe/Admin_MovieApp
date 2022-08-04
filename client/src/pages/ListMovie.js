import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ItemMovie from '../components/ListMovie/ItemMovie'

export default function ListMovie() {
    const data = useSelector((state) => state.movie.movies)
    const category = useSelector((state) => state.category.categories)

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
                    {category ? (
                        <select className="bg-[#101f42] rounded-full text-white px-3 py-1.5 outline-none">
                            {category.map(item => {
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
                            <ItemMovie item={item} key={i} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
