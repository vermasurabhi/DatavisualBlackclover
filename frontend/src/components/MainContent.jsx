import React from 'react'
import NavBarPage from './NavBarPage'
import MainPage from './MainPage'

const MainContent = () => {
  return (
    <>
    <div className='p-0 m-0 sticky-top'><NavBarPage></NavBarPage></div>
    <div className='row'>
        <div className='col-xxl-2 col-xl-2 col-lg-2  d-none d-lg-block m-0 p-0'>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sticky-top" style={{width: "100%", height: "100vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg> */}
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active" aria-current="page">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg> */}
          Home
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg> */}
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#table"></use></svg> */}
          About
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg> */}
          Source
        </a>
      </li>
      <li>
        <a href="#" className="nav-link text-white">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#people-circle"></use></svg> */}
          Contact
        </a>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>Surabhi</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
        
        </div>
        <div className='col-xxl-10 col-xl-10 col-lg-10 p-0 m-0'>
            <MainPage></MainPage>
        </div>
    </div>
    </>
  )
}

export default MainContent