import React from 'react'
import String from '../Shared/String'

import {BiSolidQuoteAltLeft, BiSolidQuoteAltRight} from 'react-icons/bi'

function About() {
  return (
    <div className=' mt-12 px-44 text-center flex flex-col items-center'>
        <h2 className='text-[40px] font-bold'>{String.ABOUT_HEADING}</h2>
        <BiSolidQuoteAltLeft className="bg-green-500 text-white text-[44px] p-3 rounded-full mt-6"/>
        <h2 className='my-5 text-gray-400 text-[14px]'>{String.ABOUT_DES}</h2>
        <BiSolidQuoteAltRight className="bg-green-500 text-white text-[44px] p-3 rounded-full"/>
       
    </div>
    
  )
}

export default About