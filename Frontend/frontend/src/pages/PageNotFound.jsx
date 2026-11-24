import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <div className='min-h-screen flex justify-center items-center  flex-col'>
            <img width={'400px'} height={'400px'} src="https://assets-v2.lottiefiles.com/a/6a21fb9a-1178-11ee-a809-cbf4c1cb708c/KS4fSTQC7T.gif" alt="PageNotFound" />
            <p className='fond-bold text-lg'>Look Like You're Lost</p>
            <p className='fond-semibold'>The Page You Are Looking For Is Not Available</p>
            <Link to={'/'} className='bg-yellow-400 hover:bg-yellow-500 text-black text-lg fond-bold mt-3 px-5 py-2 rounded'>Home</Link>
        </div>
    )
}

export default PageNotFound