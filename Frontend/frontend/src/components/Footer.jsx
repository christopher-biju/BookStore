import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
    return (
        <>
            <div className='md:grid grid-cols-3 md:gap-10 bg-neutral-500 text-white p-10'>
                {/* about us */}
                <div>
                    <h4 className='text-xl font-bold'>ABOUT US</h4>
                    <p className='mt-2 text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut fugiat vel minus et aliquam nihil, illo sint incidunt tempora eveniet voluptates ad voluptatum voluptatibus suscipit harum dicta commodi! Consectetur, amet.</p>
                </div>
                {/* news letter */}
                <div className='flex flex-col items-center md:mt-0 mt-5'>
                    <h4 className='text-xl font-bold'>NEWS LETTER</h4>
                    <p className='mt-2 mb-3'>Stay updated with our latest trends</p>
                    <div className='flex gap-1'>
                        <input type="email" placeholder='E Mail' className='border bg-white text-black p-1' />
                        <button className='bg-yellow-400 p-1'><FaArrowRight /></button>
                    </div>
                </div>
                {/* follow us */}
                <div className='flex flex-col items-center md:mt-0 mt-5'>
                    <h4 className='text-xl font-bold'>FOLLOW US</h4>
                    <p className='mt-2 mb-3'>Let us be social</p>
                    <div className='flex gap-4'>
                        <FaInstagram className='text-xl' />
                        <FaTwitter className='text-xl' />
                        <FaFacebookSquare className='text-xl' />
                        <FaEnvelope className='text-xl' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer