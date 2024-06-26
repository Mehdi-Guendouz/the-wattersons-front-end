import React from 'react'
import jttsimage from './assets/pngwing 1.png'

function JTTS() {
  return (
    <div className='flex items-center mb-[76px]' id='JTTS'>
          <div className='text-[#A0A0A0] text-28 mr-[130px] pl-14 max-w-2xl'>
              <span className='text-[#1DD300]'>TrackUp</span> does not allow the automatic sign up process, log in credentials are designed and personalized specifically, If you would like to to join the trial/join us don’t hesitate to contact us <span className='text-[#1DD300]'>below</span>.
          </div>
          <img src={jttsimage} alt="about image" />
    </div>
  )
}

export default JTTS