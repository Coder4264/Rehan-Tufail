import React from 'react'

export default function RecentProjects() {
    return (
        <div className='bg-black h-full rounded-2xl p-5 text-white '>
            <div className='projects-container'>
                <div className='project-header flex md:flex-row flex-col md:items-center md:justify-between md:mb-0 mb-10'>
                    <h2 className='text-3xl text-white font-bold p-2  inline'>Recent Projects</h2>

                    <a href="#" className='flex items-center justify-center gap-2 text-blue-500 text-md md:self-center self-end'>All Projects  <img className='w-4 h-4 ' src="https://cdn-icons-png.flaticon.com/128/758/758811.png" alt="" /></a>
                </div>

                <div className='flex items-center justify-between flex-col gap-5'>
                    <div className="class-1-project bg-slate-900 rounded-2xl h-72 hover:scale-110 duration-700 hover:bg-black">
                        <div className="main relative p-6 pb-0">
                            <img className='h-60 w-full' src="https://marveltheme.com/bentofolio/wp-content/uploads/2024/05/project-1.png" alt="" />
                            <div>
                                <h3 className='bg-white text-blue-600 rounded inline px-2 py-1 text-xs font-semibold absolute bottom-2 left-3'>Product Design</h3>
                            </div>
                        </div>
                    </div>



                    <div className="class-2-project bg-slate-900 rounded-2xl h-72 hover:scale-110 duration-700 hover:bg-black">
                        <div className="main relative p-6 pb-0">
                            <img className='h-60 w-full' src="https://marveltheme.com/bentofolio/wp-content/uploads/2024/05/project-2.png" alt="" />
                            <div>
                                <h3 className='bg-white text-blue-600 rounded inline px-2 py-1 text-xs font-semibold absolute bottom-2 left-3'>Development</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
