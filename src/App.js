import './App.css';
import { BrowserRouter, Routes, Route }  from "react-router-dom"
import SignUp from "./components/signup"
import Login from "./components/login"
import Dashboard from './components/dashboard';
import Home from './components/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<Dashboard />}>
            <Route path='' element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
