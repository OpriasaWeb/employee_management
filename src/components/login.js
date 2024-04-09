import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios  from "axios"

const baseUrl = "http://localhost:3001"
const validationStyle = {
  color: 'red',
  fontSize: '15px',
  textAlign: 'center',
  marginTop: '15px'
}

const Login = () => {
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // const [success, setSuccess] = useState("")

  const navigate = useNavigate()

  const clickLogin = (e) => {
    e.preventDefault();
    axios.post(baseUrl+"/users/login", {
      email: email,
      password: password
    }).then((res) => {
      console.log(res)
      if(res.data.status === "Success"){
        navigate('/')
      }
      else{
        setError(res.data.error)
      }
    }).catch((err) => {
      setError(err)
    })
  } 

  // Hide the register status after success or failed register
  useEffect(() => {
    setTimeout(() => {
      setError("")
    }, 2000)
  }, [error]);

  
  return(
    <div className="container" style={{paddingTop: 60}}>
      <div className="container-fluid" style={{width: 450}}>
        <div className="fs-2 mb-5">
          Employee Management
          <p style={validationStyle}>{error}</p>
        </div>
        
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="fs-4">Login</p>
              </div>
              
              {/* Email */}
              <div className="form-outline mb-4">
                <input  
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                {/* <label className="form-label">Email address</label> */}
              </div>
              {/* Password */}
              <div className="form-outline mb-4">
                <input  
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <label className="form-label">Password</label> */}
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <a href="/#" className="text-body">Forgot password?</a>
                </div>
              </div>

              <div className="text-center mt-4 pt-2">
                <button type="button" className="btn btn-primary" onClick={clickLogin}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="signup" className="link-danger">Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login