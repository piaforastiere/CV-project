import { useEffect, useState } from 'react'

import uuid from 'uuid'

import { Menu, Profile, Jobs, NameDescription, SideBar } from '../components'


import "./styles.scss"




function HomePage() {


  return (
    <>
      <Menu />
      <div className="container">
      <div className="h-100 d-inline-block">
        <div className="mainContent">
        <NameDescription />
        <Profile />
        <Jobs />

        </div>
        <SideBar />
      </div>


      </div>
    </>
  )
}

export default HomePage
