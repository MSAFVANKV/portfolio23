import React from 'react'
import {useEffect,useState} from 'react'


function Progressbar() {
    const [scrollTop, setScrollTop]=useState();
    useEffect(()=>{
        window.addEventListener("scroll",onscroll)
        return ()=>window.removeEventListener("scroll",onscroll)
    },[]);

    const onscroll=()=>{
        const windowScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight -
                        document.documentElement.clientHeight
        
        const scrolled = (windowScroll/height)*100;
        setScrollTop(scrolled)
    }

  return (
    <div className='w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px]
    h-full mb-4'>
        <div className="bg-green-600" style={{height:`${scrollTop}%`}}>

        </div>
    </div>
  )
}

export default Progressbar