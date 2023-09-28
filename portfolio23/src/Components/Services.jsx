import React from 'react'
import String from '../Shared/String'

import {IoArrowForwardOutline } from 'react-icons/io5'

function Services() {
    const serviceList = [
        {
            id:1,
            title:String.FRONTEND,
            desc:String.FRONTEND_DESC,
            logo:'/uxui.png'
        },
        {
            id:2,
            title:String.BACKEND,
            desc:String.BACKEND_DESC,
            logo:'/backend2.png',
        },
        {
            id:3,
            title:String.ONLINE,
            desc:String.ONLINE_DESC,
            logo:'/online2.png',
        },
    ]
  return (
    <div className='px-12 mt-12'>
        <div className="flex items-center">
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
        <h2 className='text-[24px] font-bold'>{String.SERVICES}</h2>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>
        {/* nn */}
        <div className="flex justify-around items-center mt-16 mb-2">
    {serviceList.map((item)=>(
        <div className="flex flex-col justify-center text-center items-center
                        gap-6">
            <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
                <img src={item.logo} className='w-[80px] h-[80px] p-4
                    hover:scale-110 transition-all cursor-pointer '/>
            </div>
            <h2 className='mt-5 font-bold'>{item.title}</h2>
            <h2 className='text-gray-400'>{item.desc}</h2>
            <IoArrowForwardOutline className="bg-green-500 text-[35px] text-white rounded-full
                    p-2 cursor-pointer hover:scale-110 transition-all"/>
        </div>
    ))}
        </div>
    </div>
  )
}

export default Services