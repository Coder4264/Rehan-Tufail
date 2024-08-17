import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import ConnectForm from './ConnectForm'

export default function Invitation() {
 
  return (
    <div className='p-5 rounded-2xl text-white bg-black flex flex-col gap-8 h-full'>
        <div className='bg-slate-900 py-2 rounded-lg text-xl '>
            <marquee behavior="" direction="">Available For Hire 🚀 Crafting Digital Experiences 🎨 Available For Hire 🚀 Crafting Digital Experiences 🎨</marquee>
        </div>

        <div className='md:text-5xl text-3xl font-semibold flex flex-col gap-3 '>
            <h3>Let's👋</h3>
            <span>Work Together</span>
        </div>
        
        <div >
          <Link to="/ConnectForm" className='flex gap-2 items-center'>
          <p className='md:text-xl text-md font-semibold text-blue-500'>Let's Talk</p>
            <img className='w-4 h-4 ' src="https://cdn-icons-png.flaticon.com/128/758/758811.png" alt="" />
          </Link>
        </div>
        
    </div>
  )
}
