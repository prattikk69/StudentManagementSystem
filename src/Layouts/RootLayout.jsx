import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'

export default function RootLayout() {
  return (
    <div className='flex gap-4'>
    <SideBar/>
    <div className="py-1">
      <Outlet/>
    </div>
    </div>
  )
}
