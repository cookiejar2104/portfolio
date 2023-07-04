import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'


export const About = () => {
    return (
        <div name='about' className='w-full h-screen'>
            <div className="flex flex-col pt-[100px] items-center w-full h-full">
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right'>
                        <p className='text-white text-3xl sm:text-4xl font-bold inline border-b-4 border-green-500'>
                            About Me
                        </p>
                    </div>
                    
                </div>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-10 pt-8 px-4'>
                    <div className='text-2xl sm:text-3xl sm:text-right'>
                        <p className='text-white'>
                            This is <span className='text-green-500 font-bold'>Dibyajyoti.</span> And here is some info about me.
                        </p>

                    </div>
                    <div>
                        <p className='text-white md:text-1xl'>
                            I'm and enginner from West Bengal. I studied Electronics Enginnering from IIT (BHU) Varanasi 2022-26. Along with college courses I've been learning various programming skills, especially full stack web development. Here is my portfolio.
                            Grades:
                            12th class: 97.8% (Marks) and
                            B.Tech: 9.00 (Grade). <br /> <br />
                            Make sure to take a quick tour of my portfolio!
                        </p>
                        
                        <div>
                        <Link to='skills' smooth={true} duration={500} >
                            <button className='text-white border-2 px-6 py-3 my-10 flex items-center max-w-[150px] hover:text-green-500 hover:border-green-500 text-1xl sm:text-1xl duration-600'>
                                View SKills<HiArrowNarrowRight className='ml-1' />

                            </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
