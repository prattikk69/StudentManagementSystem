import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'
import { useEffect, useState } from 'react'


export default function RootLayout() {
  const [deviceWidth, setDeviceWidth] = useState(700)
  function handleResize(){
        setDeviceWidth(window.innerWidth)
  }
  useEffect(()=>{
        window.addEventListener('resize' ,handleResize)
      return () => {
        removeEventListener('resize', handleResize)
      }
  }, [deviceWidth])
  
  return (
    <div>
      {deviceWidth >= 650 ? 
      <div className="py-1 flex gap-4">
        <SideBar/>
        <div className='overflow-scroll h-screen'>
          <Outlet/>
        </div>
    </div>
    : 
    <div>
      <p className='font-black text-4xl text-center
    mt-20'>Cannot view in mobile devices. Open in PC.</p>
    <p className='text-center opacity-60
    '>Your screen size is: {deviceWidth}px</p>
    <p className='text-center opacity-30
    '>Minimum screen size requirement: 650px</p>
    </div>
  }
    </div>
  )
}
