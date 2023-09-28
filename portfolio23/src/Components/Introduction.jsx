import React from 'react'

function Introduction() {
  return (
    <div className='flex m-[90px] justify-center items-center flex-col'>
        <div className="h-[120px] border-r-[1px] "></div>
        <div className="w-[5px] h-[5px] bg-green-500 rounded-full"></div>
        <h2 className='mt-5 text-black font-medium
        text-[13px] tracking-widest'>
            HELLO! MY NAME IS
        </h2>
        <h2 className='text-[70px] text-black font-bold
        tracking-widest mt-5'>
            MUHAMMED <br /> SAFVAN_KV
        </h2>
        <img src="/profile1.jpg" className='w-[170px] h-[170px] bg-gray-100 mt-7 rounded-full p-7'/>
    </div>
  )
}

export default Introduction