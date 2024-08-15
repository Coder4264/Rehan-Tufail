import React from 'react'

export default function Expertise() {
  return (
    <div className='md:h-1/2 h-full w-full rounded-2xl bg-black text-white p-3'>
        <h1 className='text-3xl text-white font-bold py-2'>My Expert Area</h1>
        <div className='expertise-container flex justify-evenly items-center flex-wrap gap-4 mt-5' >
            <div className='expertise flex flex-col justify-center text-center md:w-28 w-full mb-5'>
                <div className='expertise-img bg-gray-900 p-3 flex itms-center justify-center rounded-lg '>
                    <img className='md:w-1/2 h-full w-1/2' src="https://cdn-icons-png.flaticon.com/128/5968/5968705.png" alt="" />
                </div>
                <h3 className='text-gray-400 font-bold'>Figma</h3>
            </div>

            
            <div className='expertise flex flex-col justify-center text-center md:w-28 w-full mb-5 '>
                <div className='expertise-img bg-slate-900 p-3 flex itms-center justify-center rounded-lg'>
                    <img className='w-1/2 h-full' src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="" />
                </div>
                <h3 className=''>UX/UI</h3>
            </div>


            
            <div className='expertise flex flex-col justify-center text-center md:w-28 w-full mb-5'>
                <div className='expertise-img bg-slate-900 p-3 flex itms-center justify-center rounded-lg'>
                    <img className='md:w-1/2 w-1/2 h-full' src="https://marveltheme.com/bentofolio/wp-content/uploads/2024/06/icon17.png" alt="" />
                </div>
                <h3 className=''>Framer</h3>
            </div>


            
            <div className='expertise flex flex-col justify-center text-center md:w-28 w-full mb-5'>
                <div className='expertise-img bg-slate-900 p-3 flex itms-center justify-center rounded-lg'>
                    <img className='md:w-1/2 w-1/2 h-full' src="https://cdn-icons-png.flaticon.com/128/2318/2318845.png" alt="" />
                </div>
                <h3 className=''>Responsiveness</h3>
            </div>



            <div className='expertise flex flex-col justify-center text-center md:w-28 w-full mb-5'>
                <div className='expertise-img bg-slate-900 p-3 flex itms-center justify-center rounded-lg'>
                    <img className='md:w-1/2 w-1/2' src="https://marveltheme.com/bentofolio/wp-content/uploads/2024/06/icon3.png" alt="" />
                </div>
                <h3 className=''>Web Flow</h3>
            </div>


            <div className='expertise flex flex-col justify-center text-center md:w-28 w-full mb-5'>
                <div className='expertise-img bg-slate-900 p-3 flex itms-center justify-center rounded-lg'>
                    <img className='md:w-1/2 w-1/2' src="https://marveltheme.com/bentofolio/wp-content/uploads/2024/06/icon7.png" alt="" />
                </div>
                <h3 className=''>Zeplin</h3>
            </div>
        </div>

    </div>
  )
}
