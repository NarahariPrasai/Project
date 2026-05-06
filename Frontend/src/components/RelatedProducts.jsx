import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title'
import Productitem from './Productitem'

const RelatedProducts = ({ Genres }) => {

    const { products } = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(() => {
        if (products.length > 0) {

            let filtered = products.filter((item) => {
                // change this depending on your data structure
                return item.Genres === Genres
                // OR: return item.Genres.includes(Genres)
            })

            setRelated(filtered.slice(0, 5))
        }
    }, [products, Genres])

    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {related.map((item, index) => (
                    <Productitem
                        key={index}
                        id={item.Book_id}
                        image={item.POSTER}
                        name={item.Title}
                        price={item.PRICE}
                    />
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts