import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {
    const [currentTab, setCurrentTab] = useState(1)

    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-5'>
                {/* section 1 */}
                <div className="col-span-1">
                    <AdminSidebar />
                </div>
                {/* section 2 */}
                <div className="col-span-4">
                    <h1 className='text-3xl fond-bold text-center'>All Resource</h1>
                    <div className='flex justify-center items-center gap- my-8 font-bold text-lg'>
                        <p onClick={() => setCurrentTab(1)} className={currentTab === 1 ? 'p-4 border-gray-200 border-3 border-t border-r rounded cursor-pointer' : 'p-4 cursor-pointer border-b'}>Books</p>
                        <p onClick={() => setCurrentTab(2)} className={currentTab === 2 ? 'p-4 border-gray-200 border-3 border-t border-l rounded cursor-pointer' : 'p-4 cursor-pointer border-b'}>User</p>
                    </div>
                    {/* tab content */}
                    {
                        currentTab === 1 &&
                        <div className="md:grid grid-cols-4 w-full my-10">
                            <div className='shadow rounded p-3 m-4 md:my-0'>
                                <img height={'300px'} width={'100%'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUGorE63c_rUTcCSajpln8sNTLGy4lqAmrGHnblrP-WfxoN-5gV4XDT6n&s=10" alt="" />
                                <div className='flex flex-col justify-center items-center mt-4'>
                                    <h2 className='text-blue-700 font-bold text-xl'>Author</h2>
                                    <h3 className='text-lg font-bold'>Title</h3>
                                    <p className='text-red-500 font-bold'>Price : $</p>
                                    <button className='bg-green-600 text-white p-2 rounded-md w-full mt-2 hover:bg-green-500'>Approve</button>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        currentTab === 2 &&
                        <div className='md:grid grid-cols-3 w-full my-5'>
                            {/* duplicate  */}
                            <div className='rounded-md bg-gray-200 p-2 m-2'>
                                <p className='text-red-600 fond-bold text-md'>ID :</p>
                                <div className='flex items-center mt-3'>
                                    <img width={'80px'} height={'80px'} style={{ borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5Q5XmJV9cSFfVL01Fm3HLbpNMnzlsU8xKN7RdiYShUlso0stpFxxOhY-&s=10" alt="no image" />
                                    <div className='ms-5 flex flex-col w-full'>
                                        <h4 className="text-blue-400 font-bold text-lg">Username</h4>
                                        <p className="text-md">username@gmail.come</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminResource
