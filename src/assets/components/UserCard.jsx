import React from 'react'

export default function UserCard() {
  return (
    <div className='h-full user-card-container p-7 rounded-2xl flex flex-col gap-5'>
      <div className='flex justify-center items-center'>
      <img className='user-pic rounded-lg  w-auto h-80' src="/Rehan DP.png" alt="" />
      </div>
        <h2 className='text-slate-50 font-bold text-3xl'>Rehan Tufail</h2>
        <p className='text-slate-50 font- text-lg'>A Passionate Full Stack Developer 🖥️ & Product Designer having 3 years of Experiences over Freelance Platform.</p>
        <div className='user-button-container flex justify-between items-center'>
            <div className='card-button flex justify-evenly items-center gap-3 p-3'>
                <img src="https://cdn-icons-png.flaticon.com/128/126/126509.png" alt="" className='icons' />
                <button className='text-md text-slate-300 font-semibold'><a href="https://wa.me/923403537208" target='_blank'>Book a Call</a></button>
            </div>
            <div className='card-button flex justify-evenly items-center gap-3 p-3'>
                <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" className='icons' />
                <a href="mailto:rehantufail5@gmail.com"><button className='text-md text-slate-300 font-semibold'>Email Me</button></a>
            </div>
        </div>
        

        <div className="social-icons flex gap-3">
              <div className="facebook w-9 h-9 rounded-lg bg-slate-900 p-1 flex items-center justify-center cursor-pointer">
                <a target='_blank' href="https://web.facebook.com/profile.php?id=100005514227387">
                <img className='invert w-7' src="https://cdn-icons-png.flaticon.com/128/14064/14064490.png" alt="" />

                </a>
                
              </div>
              <div className="pinterest w-9 h-9 rounded-lg bg-slate-900 p-1 flex items-center justify-center cursor-pointer">
                <img className='invert w-7' src="https://cdn-icons-png.flaticon.com/128/2175/2175205.png" alt="" />
              </div>
              <div className="github w-9 h-9 rounded-lg bg-slate-900 p-1 flex items-center justify-center cursor-pointer">
                <img className='invert w-7' src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
              </div>
              <div className="youtube w-9 h-9 rounded-lg bg-slate-900 p-1 flex items-center justify-center cursor-pointer">
                <a href="https://www.youtube.com/@webartificer1" target='_blank'>
                <img className='invert w-7' src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" /></a>
              </div>
            </div>
    </div>
  )
}
