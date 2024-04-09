import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  return(
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none">
              <span className="fs-5 fw-bolder d-none d-sm-inline">Admin dashboard</span>
            </a>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <p className="fs-3">Employee Management System</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard