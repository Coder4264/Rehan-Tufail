import React from 'react'

import Invitation from "./Invitation"
import Navbar from "./Navbar"
import RecentProjects from "./RecentProjects"
import Services from "./Services"
import UserCard from "./UserCard"
import WorkExperience from "./WorkExperience"
import Expertise from "./Expertise"

export default function Homepage() {
  return (

    <div className="md:w-11/12 md:my-10 m-3 md:m-auto">
      

      <div className="md:mt-5 mt-0 w-12/12 flex flex-col gap-5">
        <div className="top-divs flex md:flex-row  flex-col gap-5">
          <div className="md:w-1/3 w-full">
            <UserCard />
          </div>
          <div className="md:w-1/3 w-full h-auto flex flex-col justify-between items-center gap-5">
            <WorkExperience />
            <Expertise />
          </div>
          <div className="md:w-1/3 w-full">
            <RecentProjects />
          </div>
        </div>

        <div className="bottom-divs w-full flex md:flex-row flex-col gap-5">
          <div className="md:w-2/3 w-full">
            <Services />
          </div>

          <div className="md:w-1/3 w-full">
            <Invitation />
          </div>

        </div>

      </div>
    </div>

  )
}
