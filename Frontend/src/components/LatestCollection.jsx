import React, { useContext, useState, useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=>{
      setLatestProducts(products.slice(0,5));
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST '} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime officiis recusandae, aliquid accusamus harum quos veritatis quas, autem nesciunt ad labore aut debitis corrupti. Consequuntur aut quis perferendis natus veniam.
        </p>
      </div>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6'>
        {
          latestProducts.map((item, index)=>(
            <Productitem key={index} id={item.Book_id} image={item.POSTER} name={item.Title} price={item.PRICE}/>
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection