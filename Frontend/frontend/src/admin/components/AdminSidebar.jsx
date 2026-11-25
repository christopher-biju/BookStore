import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

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
            <div className='flex flex-col justify-center items-center mt-5'>
                <div>
                    <Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-2' /> Dashbord</Link>
                </div>
                <div className='my-5'>
                    <Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-2' /> Collections</Link>
                </div>
                <div>
                    <Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-2' /> Settinga</Link>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar
