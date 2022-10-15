import Image from 'next/image'
import { title } from 'process'
import React from 'react'
import ButtonModal from './ButtonModal'

interface Props {
    img: string,
    title: string,
    description: string,
    buttonText: string,
}

function LargeCardModal({img, title, description, buttonText}:Props) {
  return (
    <section className='relative py-16 cursor-pointer '>
        {/* img */}
            <div className='relative h-96 min-w-[300px]'>
                <Image src={img} layout="fill" objectFit='cover' className='rounded-2xl' />
            </div>

            {/* text */}
            <div className='absolute top-32 left-12 space-y-3'>
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <ButtonModal key={buttonText} buttonText={buttonText} />

            </div>
    </section>
  )
}

export default LargeCardModal