import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import 'react-bootstrap/dist/react-bootstrap.min.js'
import SignUp from "./components/Signup";
import Login from "./components/login";

export default function App (){
  return(
    
      <BrowserRouter>
      <Navbar/>
      <div className="auth-wrapper">
        <div className="auth-inner">
        <Routes>
        <Route exact path="/" Component={Home}></Route>
       <Route exact path="/products" Component={Products}></Route>
       <Route exact path="/signup" Component={SignUp}></Route>
       <Route exact path="/login" Component={Login}></Route>
        </Routes>
     
      </div>
      
      </div>
    </BrowserRouter>
  )
}