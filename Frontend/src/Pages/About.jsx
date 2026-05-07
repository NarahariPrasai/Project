import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

const About = () => {
    return(
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT '} text2={'US'}/>
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[300px]' src={assets.aboutuslogo} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa voluptatibus quia animi nesciunt inventore? Ut ratione esse explicabo assumenda et, fugit atque debitis excepturi veniam quas veritatis quod ipsam at! Dignissimos porro molestias voluptatem veniam ex. Quam deleniti sapiente quia, perferendis alias inventore illo consequat</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam possimus ex laudantium et deserunt cumque, soluta, exercitationem illo maxime illum aliquam, maiores omnis alias ad non. Cumque nemo, laborum ullam officiis, a voluptas impedit nulla praesentium et, magni earum beatae?</p>
                <b className='text-gray-800'>Our Mission</b>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, laudantium neque perspiciatis exercitationem voluptatum sint. Alias hic distinctio aliquid esse molestias sint quis deleniti obcaecati, facilis quae rerum, ipsum nesciunt. Voluptatum ab provident culpa molestiae.</p>
                </div>
            </div>

            <div className='text-4xl py-4'>
                <Title text1={'WHY '} text2={'CHOOSE US'}/>
            </div>
            
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance</b>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ad cum at eveniet porro, repellat impedit aliquam facilis perspiciatis inventore culpa, labore vitae dignissimos reprehenderit.</p>
                </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ad cum at eveniet porro, repellat impedit aliquam facilis perspiciatis inventore culpa, labore vitae dignissimos reprehenderit.</p>
                </div>
                    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service</b>
                    <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ad cum at eveniet porro, repellat impedit aliquam facilis perspiciatis inventore culpa, labore vitae dignissimos reprehenderit.</p>
                </div>
            </div>

            <NewsletterBox />

        </div>
    )
}

export default About