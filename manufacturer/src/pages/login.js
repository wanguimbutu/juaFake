import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";


 const Login=()=>{
    const navigate =useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const onLogin=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            //Signed in
            const user =userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage=error.message;
            console.log(errorCode,errorMessage)
        });
    }

return(
   <>
   <main>
    <section>
        
        <div className="container">
     <h1 className="title">LOGIN</h1>
            <form className="form">
                <div className="inputContainer"> 
                    <label htmlFor="email-address" className="label">Email Address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email Address"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password</label>
                    <input
                    className="input"
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={onLogin} className="submitBtn">Login</button>
                </div>
            </form>
            <p className="text">
                No account yet?{''}
                <NavLink to="/signup">
                    Sign Up
                </NavLink>
            </p>
        </div>
        
    </section>
   </main>
   </>
);
}

export default Login;