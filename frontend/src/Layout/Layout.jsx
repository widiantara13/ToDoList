import React from 'react'
import SideBar from './SideBar';
function Layout({children }) {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-2  text-white ms-0' style={{ minHeight: "100vh", backgroundColor: "#404040"}}>
            <SideBar />
          </div>
          <div className='col-10 bg-dark' style={{ minHeight: "100vh"}} >
            <main className="h-100">{children}</main>
          </div>
        </div>
    </div>
    </>
  )
}

export default Layout