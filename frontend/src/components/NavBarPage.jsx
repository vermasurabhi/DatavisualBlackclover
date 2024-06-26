import React from 'react'

const NavBarPage = () => {
  return (
    <>
    {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">DashBoard</span>
  </div>
</nav> */}
<header>
    <div className="px-3 py-2 text-bg-dark border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
          </a>

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="#" className="nav-link text-secondary">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"></use></svg>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                About
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#grid"></use></svg>
                Source
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-white">
                <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#people-circle"></use></svg>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default NavBarPage