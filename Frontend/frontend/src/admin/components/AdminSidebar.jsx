import React from 'react'

function AdminSidebar() {
    return (
        <div className='bg-blue-100 md:min-h-screen py-10'>
            {/* img */}
            <div className='flex justify-center'>
                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5Q5XmJV9cSFfVL01Fm3HLbpNMnzlsU8xKN7RdiYShUlso0stpFxxOhY-&s=10" alt="" />
            </div>
            {/* name */}
            <h1 className='font-medium text-2xl my-5 text-center'>Admin</h1>
            {/* links */}
            
        </div>
    )
}

export default AdminSidebar
