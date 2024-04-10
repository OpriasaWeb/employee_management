import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return(
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5 fw-bolder d-none d-sm-inline">Admin dashboard</span>
            </a>
            <ul className="nav flex-column mb-0 align-items-center align-items-sm-start" id="menu">
              <li>
                <Link to="/" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/employee" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                  <span className="ms-1 d-none d-sm-inline">Manage Employee</span>
                </Link>
              </li>
              <li>
                <Link to="/profile" data-bs-toggle="collapse" className="nav-link text-white px-0 align-middle">
                  <span className="ms-1 d-none d-sm-inline">Profile</span>
                </Link>
              </li>
              <li>
                <button type="button" className="btn btn-success">Sign Out</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <p className="fs-3">Employee Management System</p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard