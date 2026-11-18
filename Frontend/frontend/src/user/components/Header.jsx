import React, { useState } from 'react'
import { FaBars, FaFacebookSquare, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <div className='bg-stone-300 grid grid-cols-3 p-3'>
                {/* logo */}
                <div className='flex items-center'>
                    <img width={'50px'} height={'50px'} src="https://png.pngtree.com/png-vector/20250712/ourmid/pngtree-colorful-books-stack-png-image_16627118.webp" alt="" />
                    <h1 className='text-2xl ms-3 font-bold md:hidden'>BookStore</h1>
                </div>
                {/* title */}
                <div className='md:flex justify-center items-center hidden'>
                    <h1 className='text-4xl  ms-3 font-bold '>BookStore</h1>
                </div>
                {/* login */}
                <div className='md:flex justify-end items-center gap-5 hidden'>
                    <FaInstagram className='text-xl' />
                    <FaTwitter className='text-xl' />
                    <FaFacebookSquare className='text-xl' />
                    <Link to={'/login'} className=' text-l flex justify-center items-center ms-4 gap-2 border border-2 rounded  px-3 py-2 hover:bg-neutral-400 border border-neutral-400' ><FaUser />Login</Link>
                </div>
            </div>
            {/* nav */}
            <nav className='bg-neutral-500 w-full text-white md:flex justify-center items-center p-3'>
                {/* menu  */}
                <div className='flex justify-between items-center  md:hidden'>
                    <button onClick={() => setToggle(!toggle)}>{toggle ? <FaX className='text-xl' /> : <FaBars className='text-2xl' />}</button>
                    <Link to={'/login'} className='flex justify-center items-center ms-4 gap-2 border border-2 rounded  px-3 py-2 hover:bg-stone-200 border border-neutral-400' ><FaUser />Login</Link>
                </div>
                <ul className={toggle ? 'flex flex-col gap-2' : 'md:flex gap-4 hidden'}>
                    <li><Link to={'/'} className='md:mx-4'>HOME</Link></li>
                    <li><Link to={'/Books'} className='md:mx-4'>BOOK'S</Link></li>
                    <li><Link to={'/Contact'} className='md:mx-4'>CONTACT</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Header