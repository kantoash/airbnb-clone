import Image from 'next/image'
import React from 'react'
import { Bars3Icon, GlobeAltIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline'
function Header() {
  return (
    <header className='sticky z-50 top-0 bg-white shadow-md px-5 py-3 md:px-8 space-x-5 items-center flex justify-between '>
        <div className='cursor-pointer min-w-[150px] '>
        <Image src="https://links.papareact.com/qd3" width={120} height={40}objectFit="contain"/>
        {/* serach */}
        </div>
        <div className='flex flex-grow items-center text-lg font-semibold  justify-center border-[1px] border-gray-300 md:border rounded-full shadow-lg py-1 px-3 flex-1'>
            <input type="text" placeholder='Start your Search' className='py-2 px-4 text-sm  placeholder:text-gray-600 bg-transparent cursor-pointer outline-none flex-1'/>
            <MagnifyingGlassIcon className=' hidden  md:inline ml-2 h-9 p-2 bg-pink-400 text-white rounded-full'/>
        </div>

        {/* icons */}
        <div className='flex space-x-3 mr-4 justify-end items-center cursor-pointer '>
            <GlobeAltIcon className='h-6'/>
            <div className='hidden md:inline-flex items-center space-x-2 border-2 p-2 rounded-3xl border-gray-300'>
                <Bars3Icon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>
    </header>
  )
}

export default Header