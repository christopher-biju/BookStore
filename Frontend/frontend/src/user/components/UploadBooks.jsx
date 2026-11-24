import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBooks() {
    return (
        <div className='bg-gray-200 my-20 mx-10 p-10 '>
            <h1 className='text-center fond-bold text-3xl'>Upload Book Detail's</h1>
            <div className='md:grid grid-cols-2 w-full mt-10'>
                {/* section*/}
                <div className='px-5'>
                    <div className='mb-5'>
                        <input type="text" placeholder='Book Title' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Author' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Book Cover Image Url' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Total Pages' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Orginal Price' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Discount Price' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <textarea rows={'5'} type="text" placeholder='Abstract' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                </div>
                {/* section 2 */}
                <div className='px-5'>
                    <div className='mb-5'>
                        <input type="text" placeholder='Publisher' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='ISBN' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Language' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" placeholder='Caterogy' className='w-full border-1 rounded bg-white text-black p-2' />
                    </div>
                    {/* upload book img  */}
                    <div className='my-10 flex justify-center items-center'>
                        <label htmlFor="bookImages">
                            <input type="file" id='bookImages' hidden />
                            <img className=' hover:cursor-pointer' style={{ width: '', height: '', borderRadius: '50%' }} width={'130px'} height={'130px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROKPodXnR6tvE2pTB-ZZMgaD92iwzC9Hq9X7pvFI4v7w&s=10" alt="uploadBook" />
                        </label>
                    </div>
                    {/* preview and add */}
                    <div className='flex justify-center items-center mb-5'>
                        <img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7KIA91kjhS5h3N-Kz9zcw6nYgqYJ2-TiEahahwsQlw&s=10" alt="" />
                        <label htmlFor="bookupload">
                            <input type="file" id='bookupload' hidden />
                            <FaPlus className='ms-3 text-2xl' />
                        </label>

                    </div>
                </div>
            </div>
            {/* reset and add book  */}
            <div className='flex justify-center mt-10 px-5 md:justify-end'>
                <button className='bg-red-600 px-3 py-2 rounded-md text-white hover:bg-red-700'>Reset</button>
                <button className='bg-green-600 px-3 py-2 text-white rounded-md ms-5 hover:bg-green-700'>Add Book Details</button>
            </div>
        </div>
    )
}

export default UploadBooks
