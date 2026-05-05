import React, {useContext, useState, useEffect} from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Title'
import Productitem from '../Components/Productitem'

const Collection  = () => {

    const { products, search, showSearch } = useContext(ShopContext)
    const [showFilter, setshowFilter] = useState(false)
    const [filterProducts, setfilterProducts] = useState([]);
    const [Genres, setGenres] = useState([]);
    const [sortType, setSortType] = useState('relavent')

    const toggleGenres = (e) => {
        if(Genres.includes(e.target.value)){
            setGenres(prev=> prev.filter(item => item !== e.target.value))
        }
        else
            setGenres(prev => [...prev, e.target.value])
    }

    const applyfilter = () => {
        let productsCopy = products.slice();

        if(showSearch && search){
            productsCopy = productsCopy.filter(item => item.Title.toLowerCase().includes(search.toLowerCase()))
        }

        if(Genres.length > 0){
            productsCopy = productsCopy.filter(item => Genres.includes(item.Genres))
        }

        setfilterProducts(productsCopy);
    }

    const sortProduct = () => {
        let fpCopy = filterProducts.slice();

        switch (sortType){
            case 'low-high':
                setfilterProducts(fpCopy.sort((a,b)=>(a.PRICE - b.PRICE)))
                break;

            case 'high-low':
                setfilterProducts(fpCopy.sort((a,b)=>(b.PRICE - a.PRICE)))
                break;

            default:
                applyfilter();
                break;
        }
    }

    useEffect(()=>{
        setfilterProducts(products);
    },[])

    useEffect(()=>{
        applyfilter();
    },[Genres,search,showSearch])

    useEffect(()=>{
        sortProduct();
    },[sortType])

    return(
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            
            <div className='min-w-60'>
                <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>

            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>GENRES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

                    <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'fiction'} onChange={toggleGenres}/>Fiction
                    </p>

                    <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'non-fiction'} onChange={toggleGenres}/>Non-Fiction
                    </p>

                    <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'mystery'} onChange={toggleGenres}/>Mystery
                    </p>

                    <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'sci-fi'} onChange={toggleGenres}/>Sci-fi
                    </p>

                    <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'romance'} onChange={toggleGenres}/>Romance
                    </p>

                    <p className='flex gap-2'>
                    <input type="checkbox" className='w-3' value={'biography'} onChange={toggleGenres}/>Biography
                    </p>
                </div>
            </div>
        </div>

        <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'ALL '} text2={'COLLECTIONS'}/>
                <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm pax-2'>
                    <option value="relavent">Sort by: Relavent</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                </select>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    filterProducts.map((item, index)=>(
                        <Productitem key={index} id={item.Book_id} image={item.POSTER} name={item.Title} price={item.PRICE}/>
                    ))
                }
            </div>

        </div>

        </div>
    )
}

export default Collection