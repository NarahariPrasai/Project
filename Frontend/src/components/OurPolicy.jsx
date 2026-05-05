import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
            <div>
                <img src={assets.shipping} alt="" className='w-18 m-auto mb-6 pt-2.5'/>
                <p className='font-semibold'>Free Shipping</p>
                <p className='text-gray-400'>On orders over Rs.3500</p>
            </div>

            <div>
                <img src={assets.security} alt="" className='w-12 m-auto mb-5'/>
                <p className='font-semibold'>Secure Checkout</p>
                <p className='text-gray-400'>100% protected payments</p>
            </div>

            <div>
                <img src={assets.support} alt="" className='w-12 m-auto mb-4 pt-1'/>
                <p className='font-semibold'>Best Customer Support</p>
                <p className='text-gray-400'>We provide 24/7 customer support</p>
            </div>
    </div>
  )
}

export default OurPolicy