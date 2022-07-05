import React from 'react'

export default function ItemMovie({ item }) {
    return (
        <div className="bg-[#192c54] rounded-xl p-3">
            <div
                style={{
                    backgroundImage: `url("${item.image}")`
                }}
                className="w-full h-80 bg-cover rounded-xl overflow-hidden"
            />
            <div>
                <p>Luyen mo</p>
            </div>
            <div>
                <p>Hành động</p>
                <p>2h35p</p>
            </div>
        </div>
    )
}
