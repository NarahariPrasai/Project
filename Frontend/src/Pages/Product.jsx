import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../Components/RelatedProducts'

const Product = () => {

    const { productId } = useParams()
    const { products, currency, addToCart } = useContext(ShopContext)
    const [productData, setProductData] = useState(null)
    const [image, setImage] = useState('')

    useEffect(() => {
        if (products.length > 0) {
            const item = products.find(
                (item) => item.Book_id === Number(productId)
            )
            if (item) {
                setProductData(item)
                setImage(item.POSTER?.[0] || '')
            }
        }
    }, [productId, products])

    if (!productData) {
        return <div className='opacity-0'>Loading...</div>
    }

    return (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-10 flex-col sm:flex-row items-start'>

                {/* LEFT: Single Image */}
                <div className='flex-1 flex justify-center'>
                    <img
                        src={image}
                        alt={productData.name}
                        className='w-[250px] sm:w-[300px] md:w-[350px] h-auto object-cover rounded'
                    />
                </div>

                {/* RIGHT: Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.Title}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.staricon} alt="" className='w-5 5' />
                        <img src={assets.staricon} alt="" className='w-5 5' />
                        <img src={assets.staricon} alt="" className='w-5 5' />
                        <img src={assets.staricon} alt="" className='w-5 5' />
                        <img src={assets.dullstar} alt="" className='w-5 5' />
                        <p className='pl-2 text-xl'>(122)</p>
                    </div>
                        <p className='mt-5 text-2xl font-medium'>{currency}{productData.PRICE}</p>
                        <p className='mt-5 text-gray-500 md:w-4/5'>{productData.DESCRIPTION}</p>
                        <div className='mt-5'>
                        <button onClick={()=>addToCart(productData.Book_id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                        </div>   
                </div>

            </div>
                <div className='mt-20'>
                    <div className='flex'>
                        <b className='border px-5 py-3 text-sm'>Description</b>
                        <b className='border px-5 py-3 text-sm'>Reviews</b>
                    </div>
                    <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                        <p>Description of Book</p>
                    </div>
                </div>

                {/*----------display related products-----------------*/}
                <RelatedProducts Genres={productData.Genres}/>

        </div>
    ) ; <div className='opacity-0'></div>
}

export default Product