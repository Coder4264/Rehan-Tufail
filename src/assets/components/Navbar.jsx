import React from 'react'
import logo from "/public/logo.png"

export default function Navbar() {
    const assets= [
        {
            "id" : 1,
            "title" : "Home",
            "imageUrl" : "https://cdn-icons-png.flaticon.com/128/263/263115.png"
        },
        {
            "id" : 2,
            "title" : "About",
            "imageUrl" : "https://cdn-icons-png.flaticon.com/128/3988/3988061.png"
        },
        {
            "id" : 3,
            "title" : "Services",
            "imageUrl" : "https://cdn-icons-png.flaticon.com/128/5453/5453382.png" 
        },
        {
            "id" : 4,
            "title" : "Works",
            "imageUrl" : "https://cdn-icons-png.flaticon.com/128/1584/1584911.png" 
        },
        {
            "id" : 5,
            "title" : "Blog",
            "imageUrl" : "https://cdn-icons-png.flaticon.com/128/4922/4922073.png" 
        },
        {
            "id" : 6,
            "title" : "Contact",
            "imageUrl" : "https://cdn-icons-png.flaticon.com/128/9374/9374883.png" 
        }
    ]
  return (
    <div className='sticky top-0 w-full  bg-black rounded-2xl flex justify-between items-center p-3'>
        <div className="logo">
            <img className='w-3/4' src={logo} alt="" />
        </div>
        <div className='flex items-center justify between gap-5'>
        {assets.map(({id, imageUrl, title}) => (
            <div className="gap-3 duration-500 flex justify-between items-center py-3 px-3.5 cursor-pointer link hover:bg-gray-800 rounded active:bg-white" key={id}>
                <img src={imageUrl} alt="{title}" className='icons' />
                <span className='text-md text-slate-300 font-semibold'>{title}</span>
        </div>
        ))}
        </div>
        <div className="message flex justify-between items-center gap-3 cursor-pointer duration-500 hover:bg-blue-600 hover:text-white active:bg-blue-800 ">
            <span className='text-md text-slate-300 font-semibold' >Lets Talk </span>
            <img src="https://cdn-icons-png.flaticon.com/128/9847/9847407.png" className='icons' alt="" />
        </div>
    </div>
  )
}
