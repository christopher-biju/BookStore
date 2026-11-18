import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'

function Home() {
    return (
        <>
            <Header />
            {/* hero sec */}
            <div style={{ height: '600px' }} className='flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover text-white'>
                <div style={{ height: '600px', backgroundColor: 'rgba(0,0,0,0.3)' }} className='w-full flex flex-col justify-center items-center'>
                    <h1 className='text-6xl font-bold'>Wonderful Gifts</h1>
                    <p className='text-xl mt-1 mb-5'>Gift your family and friends a book</p>
                    <div className='flex items-center'>
                        <input type="text" placeholder='Search a book' className='bg-white text-black rounded-3xl w-100 p-2' />
                        <FaSearch className='text-gray-500 cursor-pointer' style={{marginLeft:"-40px"}}/>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Home
