import { Check, Dice3, Pen, Trash, TriangleAlert } from 'lucide-react'
import React, { useState } from 'react'

const studentsList = [
  {name: "Axis", ID: "LC00017004254", dep: "BIT", status: true},
  {name: "Pukku", ID: "LC00017004255", dep: "BIT", status: false},
  {name: "Fulla Singh", ID: "LC00017004256", dep: "BIT", status: false},
  {name: "Aizen Sousuke", ID: "LC00017004257", dep: "BIT", status: true},
]

export default function Students() {
  const [studentsData, setStudentData] = useState(studentsList)
  return (
    <>
      <div className="">
        <h2 className='font-semibold
          text-2xl'>Student Directory</h2>
          <p className='
          w-2/3 opacity-40 text-xs'>Manage and view enrolled students across all departments.</p>
      </div>
      <div className="mt-10">
        <table>
          <thead className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr]
          gap-5 px-2 border bg-gray-300 text-gray-700'>
            <tr>STUDENT</tr>
            <tr>STUDENT ID</tr>
            <tr>DEPARTMENT</tr>
            <tr>STATUS</tr>
            <tr>ACTIONS</tr>
          </thead>
          <tbody className='border py-1'>
            {studentsList.map(({name, ID, dep, status}, index) => {
              return(
                <tr key={index} className='grid grid-cols-[2fr_1fr_1fr_1fr_1fr]
                  gap-5 px-2 py-3 hover:bg-gray-200 my-2'>
                    <td className='font-semibold'>{name}</td>
                    <td className='text-xs items-center flex'>{ID}</td>
                    <td className='font-semibold'>{dep}</td>
                    <td className='text-xs items-center flex cursor-pointer'>{status ? <span className='text-green-500 p-1 bg-gray-100 rounded-xs shadow-[0_1px_2px_rgba(0,0,0,.2)] flex'><Check/> Enrolled</span> : <span className='text-red-500 p-1 bg-gray-100 rounded-xs shadow-[0_1px_2px_rgba(0,0,0,.2)] flex items-center'><TriangleAlert/> Not enrolled</span> }</td>
                    <td className='flex items-center'><span className='flex gap-4'><Pen className='cursor-pointer
                    hover:text-gray-500 duration-300'/> <Trash className='cursor-pointer
                    hover:text-gray-500 duration-300'/></span> </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
