import { GraduationCap } from 'lucide-react'
import React from 'react'

export default function Brand() {
  return (
    <div className='flex flex-col'>
      <div className='font-bold text-2xl
        cursor-pointer text-blue-500 flex
        gap-2'
        ><GraduationCap size={38}/> StudentHub</div>
        <sub className='
        text-blue-400'>Admin portal </sub>
    </div>
  )
}
