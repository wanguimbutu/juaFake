import {  Route,  Routes } from 'react-router-dom'
import './App.css';
import Login from "./pages/login";
import Products from './pages/products';
import SignUp from "./pages/signup";
import Home from './pages/Home';
import Landingpage from './pages/landing';


function App() {
  return (
  
    <div>
      <section>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/home'element={<Home/>}/>
          <Route path='/' element={<Landingpage/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </section>
    </div>
  
  );
}

export default App;
