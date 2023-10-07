import React from 'react'
import aboutimage from './assets/removal 1.png'

function About() {
  return (
      <div className='flex items-center mb-[76px]' id='About'>
          <img src={aboutimage} alt="about image" />
          <div className='text-[#A0A0A0] text-[28px] mr-[130px]'>
              <span className='text-[#1DD300]'>TrackUp</span> is a platform that allows to track your transportation vehicles, whether it be one or multiples, TrackUp takes care of spotting them, displaying them in addition to their information, and exclusively giving you the ability to live stream them whenever and wherever moreover other functionalities.
          </div>
          
    </div>
  )
}

export default About