import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Students from './Pages/Students'
import NotFound from './Components/NotFound'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
        <Route index element={<Students/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
