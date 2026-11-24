import React from 'react'

function PurchaseHistory() {
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
                        <h1 className='fond-bold text-lg text-blue-500 mb-4'>$ Price</h1>
                        <p className='text-justify text-lg'><span className='fond-bold text-xl'>Abstract :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laborum nobis iste tempore sit. Accusamus, maxime autem nostrum optio nisi illo perspiciatis quasi, reprehenderit temporibus esse sunt et voluptatem tempore!</p>
                        <div className='flex mt-5'>
                            <img width={'140px'} height={'140px'} src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="Purchase " />
                        </div>
                    </div>
                    {/* section 2 */}
                    <div className='px-5 mt-5 md:mt-0'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7KIA91kjhS5h3N-Kz9zcw6nYgqYJ2-TiEahahwsQlw&s=10" alt="book image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PurchaseHistory