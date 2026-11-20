import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
    return (
        <>
            <Header />
            <div className='md:m-10 m-5'>
                <div className='border border-black shadow p-2'>
                    {/* grid */}
                    <div className='md:grid grid-cols-4 gap-x-10 '>
                        {/* imge */}
                        <div className='col-span-1'>
                            <img className="w-75 h-105 object-cover flex items-center justify-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUGorE63c_rUTcCSajpln8sNTLGy4lqAmrGHnblrP-WfxoN-5gV4XDT6n&s=10" alt="View Book" />
                        </div>
                        <div className='col-span-3'>
                            <div className='flex justify-between'>
                                <h3 className='font-bold text-3xl'>Title</h3>
                                <button className='font-bold text-l text-black me-2'><FaEye /></button>
                            </div>
                            <h2 className='font-bold text-xl text-blue-700 mt-4'>Author</h2>
                            <div className='md:grid grid-cols-3 gap-10 my-10'>
                                <p className='font-bold'>Publisher :</p>
                                <p className='font-bold'>Language :</p>
                                <p className='font-bold'>No.Of Page's :</p>
                                <p className='font-bold'>Category :</p>
                                <p className='font-bold'>ISBN :</p>
                                <p className='font-bold'>Orginal Price :</p>
                                <p className='font-bold'>Seller :</p>
                            </div>
                            <div className='my-4  md:my-10'>
                                <h4 className='font-bold text-2xl'>Abstract :-</h4>
                            </div>
                            <div className='flex justify-end pe-3'>
                                <Link to={'/Books'} className='bg-blue-700 hover:bg-blue-600 text-white p-2 font-semibold flex items-center rounded'><FaBackward className='me-2' /> Back</Link>
                                <button className='bg-green-700 hover:bg-green-600  p-2 text-white font-semibold ms-5 rounded cursor-pointer'>Buy $  89</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* modal */}
                <div className='relative z-10 overflow-y-auto'>
                    <div className='bg-gray-500/75 fixed inset-0'>
                        <div className='flex justify-center items-center min-h-screen'>
                            <div className='bg-white rounded-2xl w-100 md:w-250'>
                                {/* modal */}
                                <div className='bg-black text-white p-3'>
                                    <h2>Book Image</h2>
                                </div>
                                {/* modal body */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default View