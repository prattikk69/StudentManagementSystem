import { Dice3, Pen, Trash } from 'lucide-react'
import React from 'react'

export default function Students() {
  const studentsList = [
    {name: "Axis", ID: "0001400248", dep: "BIT", status: true},
    {name: "Puchu", ID: "0001400154", dep: "BCS", status: true},
    {name: "Kirmada", ID: "0001400250", dep: "BIT", status: false},
  ]
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
                    <td className='text-xs items-center flex'>{status ? "Enrolled" : "Not enrolled"}</td>
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
