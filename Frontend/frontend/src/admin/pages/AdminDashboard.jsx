import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'


function AdminDashboard() {
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
                    AdminDashboard
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboard
