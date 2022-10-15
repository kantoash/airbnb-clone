import Image from 'next/image';
import React from 'react'


interface Props {
    img: string,
    location: string;
    distance: string;
}

function PlaceCard({img, location, distance}: Props) {
  return (
    <div className='flex space-x-3 p-1 items-center m-2 mt-5 rounded-xl cursor-pointer hover:bg-gray-200 transition-transform hover:scale-105 duration-200 ease-in-out text-gray-500 '>
      {/* Left */}
      <div>
        <Image src={img} height={60} width={60} className='rounded-lg' />
      </div>
      {/* right */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default PlaceCard