import React from 'react'
import ImageUsers from '../assets/images/ImageUsers.jpg'
import ImageCategory from '../assets/images/ImageCategory.jpg'
import ImageMovie from '../assets/images/ImageMovie.jpg'
import ItemMovie from '../components/Home/ItemMovie'

const data = [
    {
        name: 'Vagabond',
        category: ['Tình cảm', 'Hành động'],
        image: 'http://images6.fanpop.com/image/photos/43000000/Vagabond-Poster-korean-dramas-43010000-1800-2691.jpg'
    },
    {
        name: 'Soundtrack',
        category: ['Tình cảm'],
        image: 'https://bloganchoi.com/wp-content/uploads/2022/04/phim-soundtrack.jpg'
    },
    {
        name: 'Our blues',
        category: ['Tình cảm'],
        image: 'https://image.thanhnien.vn/w1024/Uploaded/2022/zxaijr/2022_03_08/phimquytudansaohanleebyunghunkimwoobin1-9745.jpeg'
    },
    {
        name: 'Hạ cánh nơi anh',
        category: ['Tình cảm'],
        image: 'https://upload.wikimedia.org/wikipedia/vi/6/64/Crash_Landing_on_You_main_poster.jpg'
    },
    {
        name: 'Happiness',
        category: ['Tình cảm', 'Hành động', 'Hư cấu'],
        image: 'https://bazaarvietnam.vn/wp-content/uploads/2021/11/phim-hanh-phuc-chung-cu-co-doc-happiness-1-e1636363678113.jpg'
    },
    {
        name: 'Vagabond',
        category: ['Tình cảm', 'Hành động'],
        image: 'http://images6.fanpop.com/image/photos/43000000/Vagabond-Poster-korean-dramas-43010000-1800-2691.jpg'
    },
    {
        name: 'Soundtrack',
        category: ['Tình cảm'],
        image: 'https://bloganchoi.com/wp-content/uploads/2022/04/phim-soundtrack.jpg'
    },
    {
        name: 'Our blues',
        category: ['Tình cảm'],
        image: 'https://image.thanhnien.vn/w1024/Uploaded/2022/zxaijr/2022_03_08/phimquytudansaohanleebyunghunkimwoobin1-9745.jpeg'
    },
    {
        name: 'Hạ cánh nơi anh',
        category: ['Tình cảm'],
        image: 'https://upload.wikimedia.org/wikipedia/vi/6/64/Crash_Landing_on_You_main_poster.jpg'
    },
    {
        name: 'Happiness',
        category: ['Tình cảm', 'Hành động', 'Hư cấu'],
        image: 'https://bazaarvietnam.vn/wp-content/uploads/2021/11/phim-hanh-phuc-chung-cu-co-doc-happiness-1-e1636363678113.jpg'
    }
]

export default function Home() {
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
            <h1>Top 10</h1>
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
