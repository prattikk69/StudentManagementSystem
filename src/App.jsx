
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Students from './Pages/Students'
import NotFound from './Components/NotFound'
import Dashboard from './Pages/Dashboard'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>} >
        <Route index element={<Students/>} />
        <Route path='dashboard' element={<Dashboard/>} />
        <Route path='*' element={<NotFound/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
