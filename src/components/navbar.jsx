import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'


export const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] px-8 text-green-500'>
      <div>
        <h1 className=" text-green-500 font-bold text-5xl">dm.</h1>
      </div>
      <div>
        <ul className='hidden md:flex font-bold text-2xl justify-evenly'>
          <li className='p-4'>
            <Link to='home' smooth={true} duration={500} >Home</Link>
          </li>
          <li className='p-4'><Link to='about' smooth={true} duration={500} >About</Link></li>
          <li className='p-4'><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
          <li className='p-4'><Link to='projects' smooth={true} duration={500} >Projects</Link></li>

          <li className='p-4'><Link to='contact' smooth={true} duration={500} >Contact</Link></li>

        </ul>
      </div>

      <button>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <></> : <AiOutlineMenu size={30} />}
        </div>
      </button>
      <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r-gray-900 bg-[#0d3d0d] md:hidden' : 'fixed left-[-100%] md:hidden'}>
        <h1 className=" text-green-500 font-bold text-5xl p-5">dm.</h1>
        <ul className=' pt-28 font-bold p-4 text-2xl'>
          <li className='p-4 border-gray-600'><Link to='home' smooth={true} duration={500} >Home</Link></li>
          <li className='p-4 border-gray-600'><Link to='about' smooth={true} duration={500} >About</Link></li>
          <li className='p-4 border-gray-600'><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
          <li className='p-4 border-gray-600'><Link to='projects' smooth={true} duration={500} >Projects</Link></li>
          <li className='p-4 border-gray-600'><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
          <li className='p-4'><button>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ? <AiOutlineClose size={0} /> : <AiOutlineMenu size={30} />}
        </div>
      </button></li>
        </ul>

      </div>

    </div>
  )
}
