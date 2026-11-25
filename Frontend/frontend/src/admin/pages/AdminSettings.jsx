import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
    return (
        <>
            <AdminHeader />
            <div className='md:grid grid-cols-5'>
                {/* section 1 */}
                <div className="col-span-1">
                    <AdminSidebar />
                </div>
                {/* section 2 */}
                <div className="col-span-4 p-10">
                    <h1 className='text-3xl fond-bold text-center mb-10'>Settings</h1>
                    <div className='md:grid grid-cols-2 items-center'>
                        {/* section 1 */}
                        <div>
                            <h2 className='text-2xl fond-bold mb-10'>Welcome, Admin 👋</h2>
                            <p className="text-justify ">This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
                            <h4 className="my-5 font-bold text-lg">🔧 What You Can Manage in This Section:</h4>
                            <ul>
                                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                                <li>🔐 Change or reset your password</li>
                                <li>📢 Configure notification and alert preferences</li>
                                <li>👥 Manage permissions based on assigned access level</li>
                                <li>🧩 Customize dashboard visibility and layout</li>
                            </ul>
                            <p className="text-justify my-10">Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>

                        </div>
                        {/* section 2 */}
                        <div className='flex justify-center items-center flex-col m-10 bg-blue-100 p-5'>
                            <label htmlFor="userProfile">
                                <input type="file" id='userProfile' hidden />
                                <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5Q5XmJV9cSFfVL01Fm3HLbpNMnzlsU8xKN7RdiYShUlso0stpFxxOhY-&s=10" alt="" />
                                <button style={{ marginLeft: '60px', marginTop: '-25px', borderRadius: '50%' }} className='bg-black text-white px-2 py-2 rounded '><FaPen /></button>
                            </label>
                            <div className='mt-10 mb-5 w-full px-4'>
                                <input type="text" placeholder='UserName' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='mb-5 w-full px-4'>
                                <input type="text" placeholder='Password' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='mb-5 w-full px-4'>
                                <input type="text" placeholder='New Password' className='w-full bg-gray-100 rounded-md border-1 p-2' />
                            </div>
                            <div className='flex justify-end px-5 mt-5 w-full'>
                                <button className='bg-yellow-500 text-white px-5 py-1 font-bold rounded hover:bg-yellow-400 hover:cursor-pointer'>RESET</button>
                                <button className='bg-green-500 text-white px-5 py-1 font-bold rounded ms-3 hover:bg-green-600 hover:cursor-pointer'>RESET</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminSettings
