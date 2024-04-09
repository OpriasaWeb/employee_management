import { useEffect, useState } from "react"
import axios  from "axios"

const baseUrl = "http://localhost:3001"
const validationStyle = {
  color: 'red',
  fontSize: '15px',
  textAlign: 'center',
  marginTop: '15px'
}

const SignUp = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [registerStatus, setRegisterStatus] = useState("")

  // Register method
  const register = (e) => {
    e.preventDefault();
    axios.post(baseUrl + "/users/register", {
      name: name,
      email: email,
      password: password
    }).then((res) => {
      if(res.data.message){
        setRegisterStatus(res.data.message)
      }
      else{
        setRegisterStatus("Account created successfully!")
      }
    }).catch((err) => {
      setRegisterStatus(err)
    })
  }

  // Hide the register status after success or failed register
  useEffect(() => {
    setTimeout(() => {
      setRegisterStatus("")
    }, 2000)
  }, [registerStatus]);
  
  return (
    <div className="container" style={{paddingTop: 60}}>
      <div className="container-fluid" style={{width: 450}}>
        <div className="fs-2 mb-5">
          Employee Management: Register
          <p style={validationStyle}>{registerStatus}</p>
        </div>
        
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="fs-4">Create your account</p>
              </div>
              {/* Username */}
              <div className="form-outline mb-4">
                <input  
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
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
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <a href="/#" className="text-body">Forgot password?</a>
                </div>
              </div>

              <div className="text-center mt-4 pt-2">
                <button type="button" className="btn btn-primary" onClick={register}>Sign Up</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Login to your account <a href="login" className="link-danger">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp