import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const baseUrl = "http://localhost:3001"
const validationStyle = {
  color: 'red',
  fontSize: '15px',
  textAlign: 'center',
  marginTop: '15px'
}

const EditEmployee = () => {
  const {id} = useParams()
  const [validation, setValidation] = useState("")
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    salary: "",
  })

  // const location = useLocation()
  const navigate = useNavigate()
  // const employeeId = location.pathname.split("/")[2]

  useEffect(() => {
    axios.get(baseUrl+"/employee/get/"+id)
    .then(res => {
      setEmployee(res.data.result[0])
    })
    .catch(err => console.log(err))
  }, [])

  const handleChange = (e) => {
    setEmployee((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(baseUrl+`/employee/update/${id}`, employee);
      navigate("/employee")
    } catch (err) {
      setValidation(err)
    }
  }

  return(
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Edit Employee</h2>
      <p style={validationStyle}>{validation}</p>
      <form className="row g-3 w-50 mt-2">
        <input type='text' className='form-control' style={{display:"none"}} id='id' name='id' value={id} disabled />
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Enter name" autoComplete="off"
          value={employee.name} onChange={handleChange} name="name"
          />
        </div>
        <div className="col-12">
          <input type="email" className="form-control" placeholder="Enter email" autoComplete="off"
          value={employee.email} onChange={handleChange} name="email"
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Enter address" autoComplete="off"
          value={employee.address} onChange={handleChange} name="address"
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Enter salary" autoComplete="off"
          value={employee.salary} onChange={handleChange} name="salary"
          />
        </div>
        <div className="col-12 d-flex justify-content-between">
          <Link to="/employee" className="btn btn-info">Back</Link> 
          <button type="submit" className="btn btn-primary" onClick={submit}>Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditEmployee