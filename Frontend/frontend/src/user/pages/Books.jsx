import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggleFilter, setToggleFilter] = useState(false)
  return (
    <>
      <Header />
      <div className='flex flex-col justify-center items-center my-5'>
        <h1 className='font-bold text-3xl my-5'>All Books</h1>
        <div className='my-5'>
          <input type="text" placeholder='Search By Book Title' className='border border-black-300 w-100 p-2 rounded' />
          <button className='bg-blue-800 text-white hover:bg-blue-600 p-2 ms-1 rounded'>Search</button>
        </div>
      </div>
      {/* books card */}
      <div className='md:grid grid-cols-4 p-5 md:px-40 mb-10'>
        {/* filter */}
        <div className='col-span-1'>
          <div className='flex justify-between'>
            <h1 className='fond-bold text-2xl'>Filter</h1>
            <button onClick={() => setToggleFilter(!toggleFilter)} className='text-2xl md:hidden'><FaBars /></button>
          </div>
          {/* filter category */}
          <div className={toggleFilter ? 'block' : 'hidden md:block'} >
            <div className='mt-3'>
              <input type="radio" name='filtering' id='no-filter' />
              <label htmlFor="no-filter" className='ms-2'>All</label>
            </div>
            {/* duplicate filter category */}
            <div className='mt-3'>
              <input type="radio" name='filtering' id='no-filter' />
              <label htmlFor="no-filter" className='ms-2'>Category</label>
            </div>
          </div>
        </div>
        {/* book cards */}
        <div className='col-span-3'>
          <div className='md:grid grid-cols-4 gap-x-15'>
            {/* duplicate book cards */}
            <div className='shadow-xl  border border-gray-200 rounded p-2 m-4 w-45'>
              <img className='w-80 h-50'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7KIA91kjhS5h3N-Kz9zcw6nYgqYJ2-TiEahahwsQlw&s=10" alt="Book" />
              <div className='flex flex-col justify-center items-center mt-4'>
                <h2 className='font-bold text-xl text-blue-700'>Author</h2>
                <h3 className='text-lg font-semibold my-2'>Title</h3>
                <Link to={'/books/:id'} className='bg-blue-800 text-white p-2 rounded font-semibold'>View Book</Link>
              </div>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Books