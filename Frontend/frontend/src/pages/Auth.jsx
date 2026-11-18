import React from 'react'
import { FaEye, FaUser } from 'react-icons/fa'

function Auth({ insideRegister }) {
    return (
        <div className='text-white w-full  min-h-screen flex justify-center items-center bg-[url(landing.png)] bg-cover'>
            <div className='p-10'>
                <h1 className='text-3xl text-center font-bold'>BOOKSTORE</h1>
                <div style={{ width: '400px', backgroundColor: '#815b44' }} className=' text-white p-5 flex justify-center items-center flex-col my-5'>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className='border mb-5  flex justify-center items-center'>
                        <FaUser className='text-3xl' />
                    </div>
                    <h1 className='text-2xl font-semibold'>{insideRegister ? "Register" : "Login"}</h1>
                    <form className='w-full my-5'>
                        {/* user name */}
                        {
                            insideRegister &&
                            <input type="text" placeholder='Username' className='bg-white text-black p-2 mb-5 w-full rounded' />
                        }
                        {/* email */}
                        <input type="email" placeholder='E Mail' className='bg-white text-black p-2 mb-5 w-full rounded' />
                        {/* password */}
                        <div className='flex items-cemter'>
                            <input type="password" placeholder='password' className='bg-white text-black p-2 mb-5 w-full rounded' />
                            <FaEye className='text-black cursor-pointer' style={{ marginLeft: '-30px', marginTop: '13px' }} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth