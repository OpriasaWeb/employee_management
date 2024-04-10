import { BrowserRouter, Routes, Route }  from "react-router-dom"
import SignUp from "./components/signup"
import Login from "./components/login"
import Dashboard from './components/dashboard';
import Home from './components/home';
import Employee from './components/employee';
import Create from './components/create';
import EditEmployee from './components/editemployee';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<Dashboard />}>
            <Route path='' element={<Home />}></Route>
            <Route path='/employee' element={<Employee />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/employeeedit/:id' element={<EditEmployee />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
