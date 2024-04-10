import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const baseUrl = "http://localhost:3001"

const Employee = () => {
  const [data, setData] = useState([])

  const handleDelete = (id) => {
    axios.delete(baseUrl+"/employee/delete/"+id)
    .then(res => {
      if(res.data.status === "Success"){
        window.location.reload(true)
      } else{
        alert("Failed to delete employee. Please try again.")
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get(baseUrl+'/employee/getEmployee')
    .then(res => {
      if(res.data.status === "Success"){
        setData(res.data.result)
      } else{
        alert("Error to fetch data.")
      }
    })
    .catch(err => console.log(err))
  }, [])

  return(
    <div className="px-5 py-3">
      <div className="d-flex justify-content-center mt-2">
        <h3>Employee List</h3>
      </div>
      <Link to="/create" className="btn btn-success">Add Employee</Link>
      <div className='mt-3'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((employee, index) => {
                return <tr key={index}>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>{employee.salary}</td>
                  <td>
                    <Link to={`/employeeedit/`+employee.employee_id} className='btn btn-primary btn-sm me-2'>Edit</Link>
                    <button className='btn btn-sm btn-danger' onClick={e => handleDelete(employee.employee_id)}>Delete</button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Employee