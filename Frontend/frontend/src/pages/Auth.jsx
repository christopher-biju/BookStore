import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({ insideRegister }) {
    const [togglePassword, setTogglePassword] = useState(false)
    return (
        <div className='text-white w-full  min-h-screen flex justify-center items-center bg-[url(landing.png)] bg-cover'>
            <div className='p-10'>
                <h1 className='text-3xl text-center font-bold'>BOOKSTORE</h1>
                <div style={{ width: '400px', backgroundColor: 'rgba(0,0,0,0.7)' }} className=' text-white p-5 flex justify-center items-center flex-col my-5'>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className='border border-2 mb-5  flex justify-center items-center'>
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
                            <input type={togglePassword ? "text" : "password"} placeholder='password' className='bg-white text-black p-2 mb-5 w-full rounded' />
                            {
                                togglePassword ?
                                    <FaEyeSlash onClick={() => setTogglePassword(!togglePassword)} className='text-black cursor-pointer' style={{ marginLeft: '-30px', marginTop: '13px' }} />
                                    :
                                    <FaEye onClick={() => setTogglePassword(!togglePassword)} className='text-black cursor-pointer' style={{ marginLeft: '-30px', marginTop: '13px' }} />
                            }
                        </div>
                        {/* forgot Password */}
                        <div className='flex justify-between mb-5'>
                            <p className='text-xs text-orange-300'>* Never Share Your Password with others.</p>
                            {
                                !insideRegister &&
                                <button className='text-xs underline cursor-pointer'>Forgot Password</button>
                            }
                        </div>
                        {/* login or reg button */}
                        <div className='text-center my-5'>
                            {
                                insideRegister ?
                                    <button className='text-xl bg-green-800 w-full p-2 hover:bg-green-700 transition-colors'>Register</button>
                                    :
                                    <button className='text-xl bg-green-800 w-full p-2 hover:bg-green-700 transition-colors'>Login</button>
                            }
                        </div>
                        {/* google login */}
                        {
                            !insideRegister &&
                            <div className='text-center my-5'>
                                <p className='text-xl'>--------------------- or ---------------------</p>
                                <div className='flex justify-center items-center w-full mt-2'>
                                    Google Authentication
                                </div>
                            </div>
                        }
                        {/*  */}
                        <div className='text-center'>
                            {
                                insideRegister ?
                                    <p className='text-blue-500'>Existing User ? <Link to={'/login'} className='ms-3 underline'>Login</Link></p>
                                    :
                                    <p className='text-blue-500'>New User ? <Link to={'/register'} className='ms-3 underline'>Register</Link></p>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth