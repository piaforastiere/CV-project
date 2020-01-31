import React from 'react'
import Info from './sidebar/Info'
import Languages from './sidebar/Languages'
import Skills from './sidebar/Skills'
import Hobbies from './sidebar/Hobbies'

const SideBar = ( ) => {


  return (
    <div className="sideBar">

      <Info />
      <Languages />
      <Skills />
      <Hobbies />
    </div>
  )
}


export default SideBar
