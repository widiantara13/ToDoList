import React from 'react'
import { NavLink} from 'react-router-dom'
import {LayoutDashboard, CalendarPlus, List} from 'lucide-react'
function SideBar() {
  return (
    <div className='ps-0 h-100'>
        <nav className="nav flex-column">
          <div className='row-align-items-lg-start m-3'>
            <p>General</p>
            <ul className='sidebar-nav-list'style={{ listStyle: 'none' }}>
              <li className='sidebar-nav-item  mb-3'>
                <NavLink className='d-flex align-items-center' >
                  <LayoutDashboard className='me-2'/>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className='sidebar-nav-item mb-3'>
                <NavLink className='d-flex align-items-center' to={"/task/add"}>
                  <CalendarPlus className='me-2 '/>
                  <span>Create Task</span>
                </NavLink>
              </li>
              <li className='sidebar-nav-item mb-3'>
                <NavLink className='d-flex align-items-center' to={"/task"}>
                  <List className='me-2'/>
                  <span>Show Tasks Today</span>
                </NavLink>
              </li>
            </ul>
          </div>
            
        </nav>
    </div>
  )
}

export default SideBar