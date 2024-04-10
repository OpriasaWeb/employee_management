import { useEffect, useState } from "react"
import axios from 'axios'
const baseUrl = "http://localhost:3001"

const Home = () => {
  const [adminCount, setAdminCount] = useState(0)
  const [employeeCount, setEmployeeCount] = useState(0)
  const [sumSalary, setSumSalary] = useState(0)

  useEffect(() => {
    axios.get(baseUrl+"/users/adminCount")
         .then(res => {
          setAdminCount(res.data.result[0].admin)
         })
         .catch(err => console.log(err));

    axios.get(baseUrl+"/employee/countemployee")
         .then(res => {
          setEmployeeCount(res.data.result[0].employee)
         })
         .catch(err => console.log(err));

    axios.get(baseUrl+"/employee/sumsalary")
         .then(res => {
          setSumSalary(res.data.result[0].salary)
         })
         .catch(err => console.log(err));
  })
  return(
    <div>
      <div className="p-3 d-flex justify-content-around mt-3">
        <div className="px-3 pt-3 pb-3 border-radius shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Admin</h4>
          </div>
          <hr />
          <div>
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
        <div className="px-3 pt-3 pb-3 border-radius shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Employee</h4>
          </div>
          <hr />
          <div>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        <div className="px-3 pt-3 pb-3 border-radius shadow-sm w-25">
          <div className="text-center pb-1">
            <h4>Salary</h4>
          </div>
          <hr />
          <div>
            <h5>Total: {sumSalary.toString()}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home