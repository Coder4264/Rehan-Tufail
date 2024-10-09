import React, {useState} from 'react'

export default function WorkExperience() {
    const [scrollamount, setScrollAmount] = useState(3)

    const experience = [
        {
            "id" : 1,
            "startYear" : 2021,
            "endYear" : "Current",
            "company" : "Fiver.",
            "designation" : "Frontend Web Developer",
            "img" : "/fiver.png"
        },
        {
            "id" : 2,
            "startYear" : 2021,
            "endYear" : "Current",
            "company" : "Freelancer.",
            "designation" : "Frontend Web Developer",
            "img" : "/freelancer.png"
        },
        {
            "id" : 3,
            "startYear" : 2022,
            "endYear" : "Current",
            "company" : "Upwork.",
            "designation" : "Frontend Web Developer",
            "img" : "/upwork.png"
        },
        {
            "id" : 4,
            "startYear" : 2022,
            "endYear" : "Current",
            "company" : "Theme Forest",
            "designation" : "Websites Theme Developer",
            "img" : "/themeforest.jpg"
        },
        {
            "id" : 5,
            "startYear" : 2022,
            "endYear" : "Current",
            "company" : "Template Monster.",
            "designation" : "Websites Theme Developer",
            "img" : "template-monster.png"
        },
        {
            "id" : 6,
            "startYear" : 2023,
            "endYear" : "Current",
            "company" : "Web Artificer",
            "designation" : "Frontend Web Developer",
            "img" : "/web-artificer.jpg"
        }

    ]


  return (
    <div className='md:h-auto h-full w-full bg-black p-2 rounded-2xl'>
        <div className="header">
            <h1 className='text-3xl text-white font-bold p-2'>Work Experience</h1>
        </div>
        

            
        <div className='md:h-64' >
        <marquee className="h-64 rounded marquee p-2" behavior="" onMouseOver={(e) => e.target.stop()} onMouseOut={(e) => e.target.start()} scrolldelay="0" scrollamount="2"  direction="up" >
        {experience.map(({id, startYear, endYear, company, designation, img})=>(
            <div className='flex items-center justify-between mb-5 key={id}' >
                <h3 className='text-sm text-white w-1/3 '>{startYear}-{endYear}</h3>
                <div className='text-xl text-white flex items-center gap-2 w-2/3'>
                    <img className='w-7 h-7 rounded-full' src={img} alt="" />
                    <div className='flex flex-col justify-between'>
                        <h3 className="job-title text-sm font-bold">{company}</h3>
                        <h3 className="job-role text-xs text-slate-300">{designation}</h3>
                    </div>
                </div>
            </div>
            ))}
        </marquee>
    </div>

        
    </div>
  )
}
