import React, { useState } from 'react'
import ColorPicker from './ColorPicker'

const BuildResume = ({space}) => {
  const [background, setBackground] = useState('bg-white');
  const setMargin = space ? `lg:mt-20 w-full h-screen ${background}`: `mt-20 w-full h-screen ${background}`;

  return (
    <div className={setMargin}>
      <div className='w-full h-full lg:flex'>
       <div className='w-full lg:w-2/6 h-full'></div>
       <div className='w-full lg:w-3/6 h-full bg-blues'></div>
       <div className='w-full lg:w-1/6 h-full'>
           <ColorPicker setBackground={setBackground}/>
       </div>
      </div>
      
       
    </div>
  )
}

export default BuildResume
