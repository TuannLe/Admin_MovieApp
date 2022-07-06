import React from 'react'
import Poster from '../../assets/images/poster1.jpg'
import ItemMovie from '../ListMovie/ItemMovie'

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
    }
]

export default function index() {
    return (
        <div className="w-full h-full bg-[#101f42] overflow-y-scroll rounded-tl-xl relative">
            <div
                style={{
                    backgroundImage: `url(${require("../../assets/images/DetailMovieBG.jpg")})`
                }}
                className="w-full h-64 bg-cover"
            >
            </div>
            <div className="w-2/3 absolute top-10 pb-5">
                <div className="w-full h-full flex">
                    <div className="w-1/3 mx-10">
                        <img
                            src={Poster}
                            className="w-full h-full rounded-lg"
                            alt="Poster"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="space-y-3">
                            <h1 className="text-4xl font-medium text-white">Movie name</h1>
                            <p className="text-xl text-gray-300">The loai</p>
                            <div className="text-gray-300">
                                <span>Directed: </span>
                                <span>About Movie</span>
                            </div>
                            <p className="text-gray-300">2h30p</p>
                        </div>
                        <div className='mt-20'>
                            <h2 className="text-white text-lg font-medium">About Movie</h2>
                            <p className="text-gray-400">uihuih hih hh hh ohoi ojoj ojj uihuih hih hh hh ohoi ojoj ojj uihuih hih hh hh ohoi ojoj ojj</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 ml-10'>
                    <video
                        width="100%" height="100%" controls
                    >
                        <source src="" type='video/mp4' />
                    </video>
                </div>
                <div className='ml-10 mt-5'>
                    <h2 className="text-white text-lg font-medium mb-2">Similar Movies</h2>
                    <div className='grid grid-cols-4 gap-3'>
                        {data.map((item, i) => {
                            return (
                                <ItemMovie item={item} key={i} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
