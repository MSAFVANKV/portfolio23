import React from 'react';

function Header(showEmail) {
    const menu = [
        {
            id: 1,
            name: 'HOME'
        },
        {
            id: 2,
            name: 'SKILLS'
        },
        {
            id: 3,
            name: 'PROJECTS'
        },
        {
            id: 4,
            name: 'CONTACT'
        },
    ];

    return (
        <div className="">
            <div className='flex items-center fixed bg-white w-full justify-between border-b-2'>
                <div className='w-[90px] h-[90px] bg-black'>
                    <img src="/vite.svg" className='p-7' />
                </div>
                <div className="hidden md:flex gap-14 ">
                    {menu.map((item) => (
                        <div
                            className="cursor-pointer hover:underline font-medium offset-8"
                            onClick={item.name === 'CONTACT' ? showEmail.onEmailClick : undefined}
                        >
                            <h2>
                                {item.name}
                            </h2>
                        </div>
                    ))}
                </div>
                <div className='w-[90px] h-[90px] cursor-pointer bg-red-600 flex justify-center items-center' onClick={showEmail.onEmailClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header;
