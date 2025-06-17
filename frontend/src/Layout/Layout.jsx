import React from 'react'
import SideBar from './SideBar';
function Layout({children }) {
  return (
    <React.Fragment>
      <div className='container-fluid'>
        <div className='row g-0'>
          <div className='col-3  text-white ms-0' style={{ minHeight: "100vh", backgroundColor: "#404040"}}>
            <SideBar />
          </div>
          <div className='col-9 bg-dark' style={{ minHeight: "100vh"}} >
            <main className="h-100">{children}</main>
          </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Layout