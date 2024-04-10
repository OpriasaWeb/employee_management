import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'

const baseUrl = "http://localhost:3001"
const validationStyle = {
  color: 'red',
  fontSize: '15px',
  textAlign: 'center',
  marginTop: '15px'
}
const Create = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [salary, setSalary] = useState("")
  const [validation, setValidation] = useState("")

  useEffect(() => {
    setTimeout(()=>{
      setValidation("")
    }, 3000)
  })

  const create = (e) => {
    e.preventDefault();
    axios.post(baseUrl+"/employee/create", {
      name: name,
      email: email,
      address: address,
      salary: salary
    }).then((res) => {
      console.log(res)
      if(res.data.affectedRows === 1){
        setValidation("Add new employee successfully!")
      }
    }).catch(err => setValidation(err))
  }

  return(
    <div className="d-flex flex-column align-items-center pt-4">
      <h2>Add Employee</h2>
      <p style={validationStyle}>{validation}</p>
      <form className="row g-3 w-50 mt-2">
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Enter name" autoComplete="off" 
          onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        <div className="col-12">
          <input type="email" className="form-control" placeholder="Enter email" autoComplete="off" 
          onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Enter address" autoComplete="off" 
          onChange={(e) => {setAddress(e.target.value)}}
          />
        </div>
        <div className="col-12">
          <input type="text" className="form-control" placeholder="Enter salary" autoComplete="off" 
          onChange={(e) => {setSalary(e.target.value)}}
          />
        </div>
        <div className="col-12 d-flex justify-content-between">
          <Link to="/employee" className="btn btn-info">Back</Link> 
          <button type="submit" className="btn btn-primary" onClick={create}>Create</button>
        </div>
      </form>
    </div>
  )
}

export default Create