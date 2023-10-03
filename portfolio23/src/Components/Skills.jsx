import React from 'react'

import Mongo from '../assets/mongodb.webp'
import Express from '../assets/express.png'
import ReactLogo from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';


function Skills() {
    const skills = [
        {
            id: 1,
            name: 'MONGODB',
            logo:Mongo
        },
        {
            id: 2,
            name: 'EXPRESS',
            logo: Express
        },
        {
            id: 3,
            name: 'REACT',
            logo: ReactLogo      
        },
        {
            id: 4,
            name: 'NODE JS',
            logo:Node
        },
        {
            id: 5,
            name: 'GIT HUB',
            logo:GitHub
        },
    ];
  return (
    <>
    <div className="px-12 mt-12">
        <div className="flex items-center">
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
                 <h2 className='text-[24px] font-bold'>SKILLS</h2>
            <div className="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <div className="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
        </div>
        {/* <div className="flex justify-around items-center mt-16 mb-2" id='SKILLS'>
            
            {skills.map((item) =>(
                <div className="flex flex-col justify-center text-center items-center
                gap-6">
                    <h2>{item.name}</h2>
                    <div className="bg-gray-200 rounded-full w-[80px] h-[80px]">
                <img src={item.logo} className='w-[80px] h-[80px] p-4
                    hover:scale-110 transition-all cursor-help '/>
            </div>
                </div>
            ))}
        </div> */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8 justify-center items-center mt-16 mb-2" id='SKILLS'>
            {skills.map((item) => (
                <div className="flex flex-col justify-center text-center items-center gap-6">
                    <h2>{item.name}</h2>
                    <div className="bg-gray-200 rounded-full w-[80px] h-[80px] ">
                        <img src={item.logo} className='w-[80px] h-[80px] p-4 hover:scale-110 transition-all cursor-help' />
                    </div>
                </div>
            ))}
        </div>

        </div>
    </>
  )
}

export default Skills