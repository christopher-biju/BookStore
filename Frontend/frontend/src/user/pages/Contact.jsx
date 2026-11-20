import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationPin, FaPlane } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'

function Contact() {
    return (
        <>
            <Header />
            <div>
                <div className='md:px-20 my-5 p-5'>
                    <h1 className='text-center text-3xl font-bold my-5'>Contact</h1>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur voluptate numquam sequi vel maiores ab. Labore porro asperiores consequatur dolore. Provident optio, ex velit beatae suscipit soluta neque hic. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat expedita explicabo sit. Quam, in ipsum veritatis nostrum nemo earum nihil architecto accusamus obcaecati tempora, eaque quis consequatur perspiciatis maxime minus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo labore consequatur beatae fuga cumque unde magni tempore, blanditiis, itaque qui ex? Totam voluptate, consectetur excepturi modi vero eveniet voluptatum necessitatibus.</p>
                </div>
                {/* location + number + email */}
                <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>
                    {/* phone number */}
                    <div className='flex items-center'>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex justify-center items-center bg-gray-300'>
                            <FaPhone />
                        </div>
                        <p className='ms-5'>+91 937461485</p>
                    </div>
                    {/* Email */}
                    <div className='flex items-center'>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex justify-center items-center bg-gray-300'>
                            <FaEnvelope />
                        </div>
                        <p className='ms-5'>contactbookstore@gmail.com</p>
                    </div>
                    {/* location */}
                    <div className='flex items-center'>
                        <div style={{ width: '50px', height: '50px', borderRadius: '50%' }} className='flex justify-center items-center bg-gray-300'>
                            <FaLocationPin />
                        </div>
                        <p className='ms-5'>123 Main Street, Apt 4B, Anytown, <p>CA 92741</p></p>
                    </div>
                </div>
                {/* message + map */}
                <div className='md:grid grid-cols-2 gap-10 p-5 my-5 md:px-40'>
                    {/* message */}
                    <div className='bg-gray-200 text-center rounded-lg p-5'>
                        <h1 className='text-2xl font-semibold'>Sent Us Message !</h1>
                        <form>
                            <div className='mb-5 mt-6'>
                                <input type="text" placeholder='Name' className='bg-white w-full p-2' />
                            </div>
                            <div className='mb-5'>
                                <input type="email" placeholder='E-Mail' className='bg-white w-full p-2' />
                            </div>
                            <div className='mb-5 mt-6'>
                                <input type="text" placeholder='Phone' className='bg-white w-full p-2' />
                            </div>
                            <div className='mb-5'>
                                <textarea type="text" placeholder='Name' className='bg-white w-full p-2' />
                            </div>
                            <div className='mb-5'>
                                <button className='bg-red-500 text-white p-2 w-full rounded flex justify-center items-center hover:bg-red-600 transition-colors'> Submit <FaPaperPlane className='ms-2' /> </button>
                            </div>
                        </form>
                    </div>
                    {/* map */}
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125615.73108398358!2d76.1926952433594!3d10.302485699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0803d45fad82fd%3A0x30abb59bbed18f51!2sBook!5e0!3m2!1sen!2sin!4v1795065847854!5m2!1sen!2sin" width="100%" height="450" style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact