import React ,{useState} from 'react'
import Emailme from './Emailme'

function Profilepic({ showEmail }) {

  return (
    <>
      {showEmail  ? (
        <Emailme />
      ) : (
        <div className='fixed mt-[90px]'>
          <img src="/web2.jpg" className='h-full object-cover' />
        </div>
      )}
    </>
  );
}

export default Profilepic