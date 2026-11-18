import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

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
                        <FaSearch className='text-gray-500 cursor-pointer' style={{ marginLeft: "-40px" }} />
                    </div>
                </div>
            </div>
            {/* new arrivals */}
            <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
                <h1 className='text-4xl font-bold'>New Arrivals</h1>
                <h1 className='text-3xl my-2'>Explore Our Latest Collections </h1>
                <div className="md:grid grid-cols-4 w-full my-10">
                    <div className='shadow rounded p-3 m-4 md:my-0'>
                        <img height={'300px'} width={'100%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUGorE63c_rUTcCSajpln8sNTLGy4lqAmrGHnblrP-WfxoN-5gV4XDT6n&s=10" alt="" />
                        <div className='flex flex-col justify-center items-center mt-4'>
                            <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                            <h3 className='text-lg font-bold'>Title</h3>
                            <p className='text-red-500 font-bold'>Price : $</p>
                        </div>
                    </div>
                </div>
                <div className='my-10'>
                    <Link to={'/Books'} className='bg-black text-white p-3 rounded'>Explore More..</Link>
                </div>
            </section>
            {/* authors */}
            <section className='md:grid grid-cols-2 items-center gap-10 p-5 md:px-40'>
                <div className='text-center'>
                    <h2 className='font-bold text-2xl'>FEATURED AUTHORS</h2>
                    <h3 className='font-semibold text-l'>Captivates With Every Words</h3>
                    <p className='text-justify my-5'>Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>
                    <p className='text-justify'>Our Author Features include :</p>
                    <p className='text-justify my-4'><span className='font-bold'>📖 Published Works :</span> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>
                    <p className='text-justify'><span className='font-bold'>✨ Author Profiles :</span> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>
                    <p className='text-justify my-4'><span className='font-bold'>🎤 Interviews & Insights :</span> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world.</p>
                </div>
                <div>
                    <img src="https://t3.ftcdn.net/jpg/13/71/12/96/360_F_1371129630_WgqKTJnxkVsxh72Bqy9FcDFSBevWfqsO.jpg" alt="author" />
                </div>
            </section>
            {/* testimonials */}
            <section className='flex flex-col justify-center items-center p-5 my-5 md:px-40'>
                <h1 className='text-3xl font-bold'>TESTIMONIALS</h1>
                <h1 className='text-l font-semibold my-2'>See What Other Are Saying</h1>
                <div className='my-5 flex flex-col justify-center items-center'>
                    <img width={'200px'} height={'200px'} style={{ borderRadius: '50%' }} src="https://img.magnific.com/free-photo/pleased-handsome-male-customer-show-thumb-up-approval_176420-17945.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                    <h3 className='my-5 font-semibold'>Luthr King</h3>
                    <p className='text-justify'>
                        This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.
                    </p>
                </div>
            </section>
            {/* footer */}
            <Footer />
        </>
    )
}

export default Home