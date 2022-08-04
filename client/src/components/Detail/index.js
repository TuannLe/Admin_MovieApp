import React from 'react'
import ItemMovie from '../ListMovie/ItemMovie'
import { useLocation } from "react-router-dom";

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

export default function Detail() {
    const item = useLocation().state.item
    return (
        <div className="w-full h-full bg-[#101f42] overflow-y-scroll rounded-tl-xl relative">
            <div
                style={{
                    backgroundImage: `url(${require("../../assets/images/DetailMovieBG.jpg")})`,
                }}
                className="w-full h-64 bg-cover"
            >
            </div>
            <div className="w-2/3 absolute top-10 pb-5">
                <div className="w-full h-full flex">
                    <div className="w-1/3 mx-10">
                        <img
                            src={`data:image/png;base64,${item.poster}`}
                            className="w-full h-full max-h-[500px] rounded-lg object-cover"
                            alt="Poster"
                        />
                    </div>
                    <div className="flex-1">
                        <div className="space-y-2 h-52" >
                            <h1 className="text-4xl font-medium text-white">{item.movieName}</h1>
                            <p className="text-xl text-gray-300">{item.category[0].categoryName}</p>
                            <div className="text-gray-300">
                                <span>Directed: </span>
                                <span>{item.directors}</span>
                            </div>
                            <div className="text-gray-300">
                                <span>Casts: </span>
                                <span>{item.casts.join(',')}</span>
                            </div>
                            <p className="text-gray-300">2h30p</p>
                        </div>
                        <div className='mt-5'>
                            <h2 className="text-white text-lg font-medium">About Movie</h2>
                            <p className="text-gray-400">{item.description}</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 ml-10'>
                    <video autoPlay="autoplay" controls="controls" width="100%" height="100%">
                        <source src={item.link1080} type='video/mp4' />
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
