import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

export const Exp = () => {
    return (
        <div name='skills' className='text-white h-screen w-full'>
            <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
                <div className='pt-8 '>
                    <p className='text-white text-3xl sm:text-4xl font-bold inline border-b-4 border-green-500'>
                        Skills
                    </p>
                    <p className='text-white pt-8'>
                        Some of my tech skills are as follows:
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={HTML} alt="HTML icon" />
                        <p className='text-white py-6'>HTML</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={CSS} alt="CSS icon" />
                        <p className='text-white py-6'>CSS</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={JavaScript} alt="JS icon" />
                        <p className='text-white py-6'>Javascript</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={ReactImg} alt="React icon" />
                        <p className='text-white py-6'>ReactJS</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={Node} alt="NodeJS icon" />
                        <p className='text-white py-6'>NodeJS</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={GitHub} alt="Github icon" />
                        <p className='text-white py-6'>Github</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={Tailwind} alt="Tailwind icon" />
                        <p className='text-white py-6'>Tailwind CSS</p>
                    </div>
                    <div className='shadpw-md shadow-white hover:scale-110 duration-500'>
                        <img className='mx-auto w-20' src={Mongo} alt="MongoDB icon" />
                        <p className='text-white py-6'>MongoDB</p>
                    </div>

                </div>
            </div>

        </div>
    )
}
