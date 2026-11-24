import React from 'react'

function UploadStatus() {
    return (
        <div className='bg-gray-50 mx-5 p-10 my-15 shadow rounded'>
            {/* duplicate book status  */}
            {/* book 1 */}
            <div className='bg-gray-100 rounded-lg p-5 mt-4'>
                <div className='md:grid grid-cols-[3fr_1fr]'>
                    {/* section 1 */}
                    <div className='px-4'>
                        <h1 className='font-bold text-2xl mb-2 '>Title</h1>
                        <h1 className='fond-bold text-xl mb-2'>Author</h1>
                        <h1 className='fond-bold text-lg text-blue-500 mb-3'>$ Price</h1>
                        <p className='text-justify text-lg'><span className='fond-bold text-xl'>Abstract :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum nobis iste tempore sit. Accusamus, maxime autem nostrum optio nisi illo perspiciatis quasi, reprehenderit temporibus esse sunt et voluptatem tempore!</p>
                        <div className='flex mt-10'>
                            <img hidden width={'120px'} height={'120px'} src="https://t4.ftcdn.net/jpg/15/42/78/73/360_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.png" alt="pending" />
                            <img hidden width={'130px'} height={'130px'} src="https://png.pngtree.com/png-vector/20250801/ourmid/pngtree-distressed-red-sold-out-stamp-with-stars-png-image_16958308.webp" alt="Sold" />
                            <img width={'110px'} height={'110px'} src="https://freepngimg.com/thumb/approved/65104-approved.png" alt="approved" />

                        </div>
                    </div>
                    {/* section 2 */}
                    <div className='px-5 mt-5 md:mt-0'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7KIA91kjhS5h3N-Kz9zcw6nYgqYJ2-TiEahahwsQlw&s=10" alt="book image" />
                        <div className='flex justify-end'>
                            <button className='text-white bg-red-600 px-3 py-2 rounded-md mt-5 fond-semibold hover:bg-red-700'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadStatus