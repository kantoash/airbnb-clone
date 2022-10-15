import React from 'react'

interface Props {
    buttonText: string,
}

function ButtonModal( {buttonText} :Props) {
  return (
    <div className={` bg-gray-500 py-3 px-5 text-center rounded-lg text-white hover:shadow-xl tracking-wide font-[500] `}>
        <p>{buttonText}</p>
    </div>
  )
}

export default ButtonModal