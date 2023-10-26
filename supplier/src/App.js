import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import 'react-bootstrap/dist/react-bootstrap.min'
import SignUp from "./components/Signup";
import Login from "./components/login";
import Metamask from "./components/Metamask";

//import { Container,Col, Row } from "react-bootstrap";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App (){
  return(
   
        <UserAuthContextProvider>
      <BrowserRouter>
      <Navbar/>
      
        <Routes>
        <Route exact path="/" element={<ProtectedRoute>
          <Home/>
          </ProtectedRoute>}
           />
       <Route exact path="/products" Component={Products}></Route>
       <Route exact path="/signup" Component={SignUp}></Route>
       <Route exact path="/login" Component={Login}></Route>
       <Route exact path="/connect" Component={Metamask}></Route>
        </Routes>

      
    </BrowserRouter>
    </UserAuthContextProvider>
  )
}