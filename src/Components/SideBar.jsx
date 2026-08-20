
import React from 'react'
import Brand from './Brand'
import { ArrowLeft, BarChart3Icon, CalendarClock, LayoutDashboard, UserCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
    const navLists = [
        {lable: "Dashboard", icon: LayoutDashboard, link: "dashboard"},
        {lable: "Students", icon: UserCircle2, link: "/"},
        {lable: "Shedule", icon: CalendarClock, link: "shedule"},
        {lable: "Reports", icon: BarChart3Icon, link: "reports"}
    ]
    
    return (
        <div className=' bg-gray-100 w-1/5
        px-2 py-1 h-screen border-r-gray-600 flex
        flex-col sidebar'>
                <Brand/>
                <div className="nav mt-8">
                    {navLists.map(({lable, icon:Icon, link}, index) => {
                        return(
                            <NavLink to={link} key={index}
                            className={`flex gap-4 my-5 py-2 px-1
                            rounded-xs`}>
                                <Icon size={30}/> <p>{lable}</p>
                            </NavLink>
                        )
                    })}
                </div>
        </div>
    )
}
