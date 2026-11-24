import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import Edit from '../components/Edit';
import UploadBooks from '../components/UploadBooks';
import UploadStatus from '../components/UploadStatus';
import { FaCircleCheck } from 'react-icons/fa6';
import PurchaseHistory from '../components/PurchaseHistory';

function Profile() {
  const [currentTab, setCurrentTab] = useState(1)
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div style={{ height: '230px', width: '230px', borderRadius: '50%', marginLeft: '75px', marginTop: '-130px' }} className='bg-white p-3'>
        <img style={{ height: '200px', width: '200px', borderRadius: '50%' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5Q5XmJV9cSFfVL01Fm3HLbpNMnzlsU8xKN7RdiYShUlso0stpFxxOhY-&s=10" />
      </div>
      <div className='flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
          <FaCircleCheck className='text-blue-500 ms-3' />
        </div>
        <Edit />
      </div>
      <p className='text-xl font-bold px-20 mt-5'>Bio</p>
      <p className='text-justify md:px-20 px-5 my-5'>This is your personal space where you can manage your account, explore your reading activity, and track your history. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus aspernatur aliquid, sapiente quidem tenetur ducimus est a eaque possimus soluta officia dolores dolore porro illum repudiandae. Ab minima mollitia optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugiat eaque neque labore deserunt, alias itaque ullam, aliquam, repellat corporis iste iusto consectetur molestias atque recusandae. Hic animi iure magnam.</p>
      <div className='flex justify-center items-center gap-3 my-8 font-bold text-lg'>
        <p onClick={() => setCurrentTab(1)} className={currentTab === 1 ? 'p-4 border-gray-200 border-3 border-t border-r rounded cursor-pointer' : 'p-4 cursor-pointer border-b'}>Upload books</p>
        <p onClick={() => setCurrentTab(2)} className={currentTab === 2 ? 'p-4 border-gray-200 border-3 border-t border-r rounded cursor-pointer' : 'p-4 cursor-pointer border-b'}>Upload book status</p>
        <p onClick={() => setCurrentTab(3)} className={currentTab === 3 ? 'p-4 border-gray-200 border-3 border-t border-r rounded cursor-pointer' : 'p-4 cursor-pointer border-b'}>Purchase history</p>
      </div>
      {currentTab === 1 && <div><UploadBooks /></div>}
      {currentTab === 2 && <div><UploadStatus /></div>}
      {currentTab === 3 && <div><PurchaseHistory/></div>}
      <Footer />
    </>
  )
}

export default Profile