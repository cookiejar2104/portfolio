import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='text-white h-screen w-full'>
      <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full my-10 pt-10'>
        <div className='pt-8 '>
          <p className='text-white text-3xl sm:text-4xl font-bold inline border-b-4 border-green-500'>
            Contact
          </p>
          <p className='text-white pt-4'>
            Fill out the form to contact me!                    </p>
        </div>
        <form method='POST' action="https://getform.io/f/e8a6e4e2-4bf4-4f4f-9d70-ee89c31b6a4c" className='flex flex-col max-w-[600px] w-full'>

          <input type="text" placeholder='Name' name='name' className='my-2 bg-gray-500 p-2' />
          <input type="text" placeholder='E-mail' name='email' className='my-2 bg-gray-500 p-2' />
          <textarea name="comment" id="" cols="30" rows="3" className='bg-gray-500 p-2 my-2' placeholder='Comment'></textarea>
          <button className='text-white border-2 px-6 py-1 my-1 flex items-center justify-center max-w-[150px] hover:text-green-500 hover:border-green-500 text-1xl sm:text-1xl duration-600'>
            Send
          </button>
        </form>



      </div>

    </div>
  )
}
