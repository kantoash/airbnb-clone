import Image from 'next/image'
import React from 'react'

interface Props {
    img: string,
    title: string,
}

function MidCards({img, title} : Props) {
  return (
    <div className='cursor-pointer p-2 transition-transform hover:scale-95 ease-out duration-300 shadow-lg hover:bg-gray-200 rounded-lg space-y-3'>
      <Image src={img} height={300} width={300} className="rounded-md"/>
      <h3 className='font-[500] text-gray-600'>{title}</h3>
    </div> 
  )
}

export default MidCards