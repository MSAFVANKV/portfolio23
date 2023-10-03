import React from 'react'

import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram,
    IoLogoWhatsapp} from "react-icons/io5";

    
function Sidebar() {
  return (
    <div className='w-[90px] h-screen
    bg-white border-r-[1px] mt-[90px] fixed sm:flex flex-col justify-around
     items-center hidden'>

        <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
        <div className="flex flex-col gap-7 mb-10
             text-[20px]">
            <IoLogoGithub className="cursor-pointer hover:scale-125 transition-all ease-in-out"/>
            <IoLogoLinkedin className="cursor-pointer hover:scale-125 transition-all ease-in-out"/>
            <IoLogoInstagram className="cursor-pointer hover:scale-125 transition-all ease-in-out"/>
            <IoLogoWhatsapp className="cursor-pointer hover:scale-125 transition-all ease-in-out"/>

        </div>
        
    </div>
  )
}

export default Sidebar