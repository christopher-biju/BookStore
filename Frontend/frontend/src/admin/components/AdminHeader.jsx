import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
    return (
        <>
            {/* header */}
            {/* logo */}
            <div className='bg-neutral-600 flex justify-between items-center p-3 md:px-20'>
                <div className='flex items-center'>
                    <img width={'50px'} height={'50px'} src="https://png.pngtree.com/png-vector/20250712/ourmid/pngtree-colorful-books-stack-png-image_16627118.webp" alt="" />
                    <h1 className='text-white text-2xl ms-3 font-bold'>BookStore</h1>
                </div>
                {/* logout */}
                <button className='bg-neutral-100 hover:bg-black hover:text-white text-black px-3 py-2 rounded-md flex items-center border-2 fond-bold'>Logout <FaPowerOff className='ms-2' /></button>
            </div>
            {/* header marquee */}
            <div className='bg-black text-white p-3'>
                <marquee>welcom Admin, Your all set to manage and monitor the system. Let's get into work!!!</marquee>
            </div>
        </>
    )
}

export default AdminHeader
