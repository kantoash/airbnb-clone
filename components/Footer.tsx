import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 px-20 py-14 gap-y-10 gap-x-6 bg-gray-100 '>
        <div className='footerCol cursor-pointer'>
            <h3 className='footerColHead'>About</h3>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>
        <div className='footerCol'>
            <h3 className='footerColHead'>COMMUNITY</h3>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>Papafam</p>
        </div>
        <div className='footerCol'>
            <h3 className='footerColHead'>HOST</h3>
            <p>Next js</p>
            <p>tailwindcss</p>
            <p>MapBox</p>
            <p>Calendar & Date Picker</p>
        </div>
        <div className='footerCol'>
            <h3 className='footerColHead'>SUPPORT</h3>
            <p className='footerTAG'></p>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Say Hi</p>
        </div>
    </div>
  )
}

export default Footer