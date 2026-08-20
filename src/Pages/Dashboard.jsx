
import React from 'react'
import AddStudentBtn from '../Components/AddStudentBtn'

export default function Dashboard() {
  return (
    <>
        <div className="flex items-center">
            <p className='font-semibold
            text-3xl'>Dashboard</p>
            <sub>Admin</sub>
        </div>
        <AddStudentBtn/>
    </>
  )
}
