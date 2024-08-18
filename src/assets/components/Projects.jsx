import { Link } from 'react-router-dom'
import React from 'react'
import UserCard from './UserCard'

export default function Projects() {
    const projects = [
        {
            id : 1,
            title : "Website Developer Portfolio",
            subTitle : "A React Based Portal Project",
            img : "/portal.png",
            link : "https://rehan-tufail.netlify.app/"
        },
        {
            id : 2,
            title : "Ezitech Clone Website",
            subTitle : "A React Based Project",
            img : "/ezitech.png",
            link : "https://ezitech-react-clone.netlify.app/"
        },
        {
            id : 3,
            title : "Monsters Rolodex Using JSONPlaceholder API",
            subTitle : "A React Based Project",
            img : "/monsters.png",
            link : "https://monsters-rolodex-react.netlify.app/"
        },
        {
            id : 4,
            title : "Countries Listing App Using API",
            subTitle : "A React Based Project",
            img : "/countries.png",
            link : "https://countries-listing-app.netlify.app/"
        },
        {
            id : 5,
            title : "Sneakers E-Commerece Website",
            subTitle : "Html, CSS and JS Project",
            img : "/sneakers.png",
            link : "https://sneakers-ecommerce-store.netlify.app/"
        },
        {
            id : 6,
            title : "Food Delivery Website",
            subTitle : "Html, CSS and JS Project",
            img : "/food-delivery.png",
            link : "https://omni-foodz.netlify.app/"
        },
        {
            id : 7,
            title : "Website Development Service Provider",
            subTitle : "Html, CSS and JS Project",
            img : "/web-services.png",
            link : "https://slight-app.netlify.app/"
        },
        {
            id : 8,
            title : "A Restaurant Website  ",
            subTitle : "Html, CSS and JS Project",
            img : "/restaurant.png",
            link : "https://ingre-food-app.netlify.app/"
        },
        {
            id : 9,
            title : "Complete Web Development Resources Websites",
            subTitle : "Html, CSS and JS Project",
            img : "/how-to.png",
            link : "https://howto-resource-app.netlify.app/"
        },
        {
            id : 10,
            title : "Best E-Books Website",
            subTitle : "Html, CSS and JS Project",
            img : "/e-book.png",
            link : "https://free-ebooks-app.netlify.app/"
        },
        {
            id : 11,
            title : "Workout GYM Website | Registration",
            subTitle : "Html, CSS and JS Project",
            img : "/workout.png",
            link : "https://alpha-workout.netlify.app/"
        },
    ]
    return (
        <div className='text-white font-bold md:w-11/12 m-3 md:m-auto flex md:flex-row flex-col justify-between gap-5'>
            <div className="md:w-1/3 w-auto h-full md:sticky md:top-28">
                <UserCard />
            </div>
            <div className='md:w-2/3 w-full h-full bg-black p-7 rounded-2xl'>
                <h1 className='text-4xl font-semibold py-7'>Check Out My Latest <span className='text-blue-500'>Projects</span></h1>
                <p className='text-slate-400 font-normal text-lg'>I'm here to help if you're searching for a Web Developer to bring your idea to life or a design partner to help take your business to the next level.</p>
                <div className='form-container bg-slate-900 mt-10 h-full md:p-7 p-3 rounded-xl flex flex-col'>
                    {projects.map(({id, title, subTitle, img, link})=>(
                        <div className='pro-container mb-10' key={id}>
                        <div>
                            <img className='w-full h-auto aspect-video' src={img} alt="" />
                        </div>
                        <div className='flex md:justify-between md:flex-row flex-col md:gap-0 gap-5 md:items-center py-3'>
                            <div>
                                <h2 className='md:text-xl text-lg font-bold text-slate-300' >{title}</h2>
                                <h3 className='text-slate-500 text-normal font-normal'>{subTitle}</h3>
                            </div>
                            <div >
                                <Link to={link} className='flex gap-3 items-center'>
                                    <h3 className='text-blue-500'>Visit Site</h3>
                                    <img className='w-4 h-4 text-slate-300' src="https://cdn-icons-png.flaticon.com/128/758/758811.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>

    )
}
