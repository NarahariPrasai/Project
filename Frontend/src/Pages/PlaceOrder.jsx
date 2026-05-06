import React from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
            <div className=' text-xl sm:text 2xl my-3'>
                <Title text1={'DELIVERY '} text2={'INFORMATION'}/>
            </div>
            <div className='flex gap-3'>
                <input placeholder='First name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
                <input placeholder='Last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
            </div>
            <input placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" />
            <input placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
            <div className='flex gap-3'>
                <input placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
                <input placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
            </div>
            <div className='flex gap-3'>
                <input placeholder='Zipcode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" />
                <input placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" />
            </div>
            <input placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" />
        </div>

        <div className='mt-8'>
            <div className='mt-8 min-w-80'>
                <CartTotal />
            </div>

            <div className='mt-12'>
                <Title text1={'PAYMENT'} text2={'METHOD'}/>
                <div className='flex gap-3 flex-col lg:flex-row'>
                    <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
                        <img className='h-5 mx-4' src={assets.esewa_logo} alt=""/>
                    </div>
                    <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                        <p className={`min-w-3.5 h-3.5 border rounded-full`}></p>
                        <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default PlaceOrder