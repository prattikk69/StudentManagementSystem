
import { TriangleAlert } from 'lucide-react'
import React from 'react'

export default function NotFound() {
  return (
    <div className='font-bold
    text-3xl mx-20 mt-50 flex gap-2
    items-center'
    ><TriangleAlert size={38}/> 404 | Page was not found</div>
  )
}
