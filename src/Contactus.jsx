import React from 'react'
import contactusimage from './assets/satellite-orbite-planete-terre-arriere-plan 1.png'
import ThirdHeading from './component/ThirdHeading'
import Form from './component/Form'

function Contactus() {
    
        return (
            <div className='overflow-hidden ' id='Contactus'>
                <div className='flex items-center gap-10'>
                    <img src={contactusimage} alt="contact us image" />
                    <div className='text-[#A0A0A0] text-[28px] w-[50%]   '>
                    <div className="flex items-center justify-center ">
    <div className='  flex flex-col items-center'>
      <p className='mb-12 font-semibold'>Enter your tracking space</p>
      <Form />
    </div>
  </div>
</div>

                    
                </div>
                <div><ThirdHeading myString="Contact us"/></div>
            </div>
        )
    }

export default Contactus