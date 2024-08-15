import React from 'react'

export default function Services() {
  const services = [
    {
      "id" : 1,
      "imgUrl" : "https://cdn-icons-png.flaticon.com/128/13191/13191281.png",
      "title" : "UI/UX Designer"
    },
    {
      "id" : 2,
      "imgUrl" : "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
      "title" : "Web App"
    },
    {
      "id" : 3,
      "imgUrl" : "https://cdn-icons-png.freepik.com/256/2621/2621226.png?semt=ais_hybrid",
      "title" : "Design to Code"
    },
    {
      "id" : 4,
      "imgUrl" : "https://cdn-icons-png.flaticon.com/128/13540/13540845.png",
      "title" : "Full Stack Dev"
    },
  ]

  return (
    <div className='bg-black h-full rounded-2xl p-5 text-white '>
        <div className='services-header flex md:flex-row flex-col md:items-center md:justify-between'>
          <h3 className='text-3xl text-white font-bold p-2 inline '>Services I Offered</h3>
          <a href="#" className='flex items-center justify-center gap-2 inline text-blue-500 md:text-lg text-md md:self-center self-end'>See All Services  <img className='w-4 h-4 ' src="https://cdn-icons-png.flaticon.com/128/758/758811.png" alt="" /></a>
        </div>
        <div className="services-items w-full flex md:flex-row flex-col justify-between items-center p-3 md:gap-0 gap-10 ">
      {services.map(({id, imgUrl, title}) =>(
        
        <div className="service-item md:w-1/5 w-full px-3 py-3 box-border flex flex-col justify-between gap-6 bg-slate-900 rounded-2xl hover:scale-110 duration-500" key={id}>
          <div className='rounded-xl w-full p-4  box-border mx-auto flex items-center justify-center bg-black'>
            <img className='w-24 h-24' src={imgUrl} alt="" />
          </div>
          <h3 className='text-center text-slate-400 font-semibold'>{title}</h3>
        </div>
      
      ))}
      </div>  
    </div>
  )
}
