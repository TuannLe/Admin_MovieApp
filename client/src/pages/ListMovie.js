import React from 'react'
import ItemMovie from '../components/ListMovie/ItemMovie'

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

export default function ListMovie() {
    return (
        <div className="w-full h-full bg-[#192c54] pt-5 pb-12 rounded-tl-xl overflow-hidden">
            <div className="flex justify-between items-center mb-3 px-5">
                <h1 className="text-white text-2xl font-medium">
                    List Movie
                </h1>
                <div className="space-x-3">
                    <input
                        className="w-64 bg-[#101f42] rounded-full text-white px-3 py-1.5 outline-none"
                        placeholder="Search"
                    />
                    <select className="bg-[#101f42] rounded-full text-white px-3 py-1.5 outline-none">
                        <option value="Trinh tham">Tất cả</option>
                        <option value="Trinh tham">Trinh thám</option>
                        <option value="Trinh tham">Hành động</option>
                        <option value="Trinh tham">Tình cảm</option>
                        <option value="Trinh tham">Kinh dị</option>
                    </select>
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
