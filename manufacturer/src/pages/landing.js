import { useNavigate } from "react-router-dom"
import '../styles/landingpage.css';
//simport image from '../assets/bacground2.jpg'

const Landingpage=()=>{
    const navigate =useNavigate()
    const handleRedirect=()=>{
        navigate('/signup')
    }
    return(
      
      
        <div className="nav">
            <h1>WELCOME TO AUTHENTIFY</h1>
            <div className="card">
                <img src="" alt="avatar"/>
                <div className="container">
                    <h4>Manufacturer</h4>
                </div>
                <div className="container">
                    <h4>Supplier</h4>
                </div>
            <button  onClick={handleRedirect}>Connect to continue</button>
        </div>
        </div>
      
    
    )
}
export default Landingpage;