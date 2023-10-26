import { useNavigate } from 'react-router-dom';
import './Home.css'
function Home(){
    const navigate=useNavigate();
    const navigateToSignup=()=>{
        navigate('/signup')
    }
    return(
        <div className="hero">
        <h1 className="text-center">AUTHENTIFY</h1>
        <h3 className="text-center">Ensuring your drinks are safe, so that you can enjoy</h3>
       <div className="text-center">
       <button className="btn btn-primary" onClick={navigateToSignup}>Get Started</button>
       </div>
        </div>
    )
}
export default Home;