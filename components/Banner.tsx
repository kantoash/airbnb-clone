import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src="https://links.papareact.com/0fm" layout='fill' objectFit='cover'/>
        <div className='absolute top-1/2 w-full text-center'>
        <p>Not sure where to go? Perfect.</p>
        <button className='text-violet-500 font-semibold bg-white px-8 py-4 my-2 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-90 duration-150 '>I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner