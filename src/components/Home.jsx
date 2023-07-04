import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


export const Home = () => {
    return (
        <div name='home' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto mt-50 px-8 pt-10 flex flex-col h-full' >
                <p className='text-white font-bold pt-10 text-1xl sm:text-3xl'>
                    Hi there! I'm
                </p>
                <h1 className='text-green-500 font-bold text-2xl sm:text-5xl pt-5'>
                    DIBYAJYOTI MANDAL
                </h1>
                <h1 className=' text-green-200 font-bold text-1xl sm:text-3xl pt-2'>A Software Developer </h1>
                <p className='text-white pt-10 sm:text-1.5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde at corrupti minima id mollitia incidunt debitis doloribus repellendus molestiae consequatur eaque natus a est voluptatibus accusamus exercitationem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus, eaque ea nam atque nihil provident perspiciatis qui doloribu. </p>
                <div>
                <Link to='about' smooth={true} duration={500} >
                    <button className='text-white border-2 px-6 py-3 my-10 flex items-center max-w-[150px] hover:text-green-500 hover:border-green-500 duration-600'>
                        View More<HiArrowNarrowRight className='ml-1' />
                    </button>
                </Link>
                </div>

            </div>
        </div>

    )
}
