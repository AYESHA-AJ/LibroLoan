import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeContext } from '../context'
import Header from './Header'
import SideBar from './SideBar'

const Main = () => {
const {darkMode}=useContext(ThemeContext)

  return (
    <div className={`h-full w-full ${darkMode ? "dark transition-all" : "transition-all"}`}>
      <Header/>
      <main>
        <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
          <SideBar/>
        <div className='min-h-screen'>
           <Outlet/>
      </div>
        </div>
      </main>
      
      
    </div>
  )
}

export default Main
