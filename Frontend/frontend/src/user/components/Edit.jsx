import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
    const [OffCanvas, setOffCanvas] = useState(false)
    return (
        <div>
            {/* Button */}
            <button onClick={() => setOffCanvas(!OffCanvas)} className='bg-mist-500 text-white font-bold p-2 flex items-center justify-center rounded hover:bg-white hover:text-black border'>
                <FaPen className='me-2' /> EDIT
            </button>
            {/* Offcanvas */}
            {
                OffCanvas &&
                <div>
                    <div className='bg-gray-500/75 inset-0 fixed w-full h-full'></div>
                    <div className='bg-white h-full z-50 fixed w-90 top-0 left-0'>
                        <div className='flex justify-between items-center mb-5 bg-neutral-600 text-white p-3 text-2xl'>
                            <h1>Update User Profile</h1>
                            <FaX className='hover:text-red-300' onClick={() => setOffCanvas(!OffCanvas)} />
                        </div>
                        <div className='flex justify-center items-center flex-col my-5'>
                            <label htmlFor="userProfile">
                                <input type="file" id='userProfile' hidden />
                                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5Q5XmJV9cSFfVL01Fm3HLbpNMnzlsU8xKN7RdiYShUlso0stpFxxOhY-&s=10" alt="" />
                                <button style={{ marginLeft: '60px', marginTop: '-25px', borderRadius: '50%' }} className='bg-black text-white px-2 py-2 rounded fixed'><FaPen /></button>
                            </label>
                            <div className='mt-10 mb-3 w-full px-4'>
                                <input type="text" placeholder='UserName' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='mb-3 w-full px-4'>
                                <input type="text" placeholder='Password' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='mb-3 w-full px-4'>
                                <input type="text" placeholder='New Password' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='mb-3 w-full px-4'>
                                <input type="text" placeholder='Bio' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='flex justify-end px-5 mt-5 w-full'>
                                <button className='bg-yellow-500 text-white px-5 py-1 font-bold rounded hover:bg-yellow-400 hover:cursor-pointer'>RESET</button>
                                <button className='bg-green-500 text-white px-5 py-1 font-bold rounded ms-3 hover:bg-green-600 hover:cursor-pointer'>RESET</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Edit
