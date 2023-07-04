import React from 'react'
import Real from "../assets/real.jpg"


export const Projects = () => {
    return (
        <div name='projects' className='w-full h-screen text-white pt-6' >
            <div className='max-w-[1000px] mx-auto p-6 flex-col justify-center w-full h-full'>
                <div className='pt-8 '>
                    <p className='text-white text-3xl sm:text-4xl font-bold inline border-b-4 border-green-500'>
                        Projects
                    </p>
                    <p className='text-white pt-8'>
                        Here are some of my projects along with their source codes:
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 my-8'>
                    <div style={{ backgroundImage: `url(${Real})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='font-bold text-black tracking-wider text-center'>
                                Frontend Project
                            </span>
                            <div>
                                <a href="https://cookiejar2104.github.io/textutils/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>
                                        Webpage
                                    </button>
                                </a>
                                <a href="https://github.com/cookiejar2104/textutils">
                                <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Real})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='font-bold text-black tracking-wider text-center'>
                                Frontend Project
                            </span>
                            <div>
                                <a href="https://cookiejar2104.github.io/textutils/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>
                                        Webpage
                                    </button>
                                </a>
                                <a href="https://github.com/cookiejar2104/textutils">
                                <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Real})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='font-bold text-black tracking-wider text-center'>
                                Frontend Project
                            </span>
                            <div>
                                <a href="https://cookiejar2104.github.io/textutils/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>
                                        Webpage
                                    </button>
                                </a>
                                <a href="https://github.com/cookiejar2104/textutils">
                                <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Real})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='font-bold text-black tracking-wider text-center'>
                                Frontend Project
                            </span>
                            <div>
                                <a href="https://cookiejar2104.github.io/textutils/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>
                                        Webpage
                                    </button>
                                </a>
                                <a href="https://github.com/cookiejar2104/textutils">
                                <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${Real})` }} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='font-bold text-black tracking-wider text-center'>
                                Frontend Project
                            </span>
                            <div>
                                <a href="https://cookiejar2104.github.io/textutils/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>
                                        Webpage
                                    </button>
                                </a>
                                <a href="https://github.com/cookiejar2104/textutils">
                                <button className='text-center rounded-lg px-4 py-3 m-2 border-2 border-black text-black font-bold hover:border-white hover:text-white'>                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
