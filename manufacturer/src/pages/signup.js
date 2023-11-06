import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useState } from "react";
import '../styles/signup.css'
 const SignUp=()=>{
    const navigate =useNavigate();

    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('');
    const onSubmit =async(e)=>{
        e.preventDefault()

        await createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
        })
        .catch((error)=>{
            const errorCode =error.code;
            const errorMessage=error.message;
            console.log(errorCode,errorMessage);
        })
    }
    return(
        <main>
            <section>
                <div className="container">
                    <h1>Authentify</h1>
                    <form className="signupFrm">
                        <div className="inputContainer">
                            <label htmlFor="email-address" className="label">Email Address</label>
                            <input className="input"
                            type="email"
                            label='Email Address'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            placeholder="Email address"/>
                        
                        </div>
                        <div className="inputContainer">
                            <label htmlFor="password" className="label">Password</label>
                            <input
                            className="input"
                            type="password"
                            label="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            placeholder="password"
                            />
                        </div>
                        <button type="submit" onClick={onSubmit} className="submitBtn">Sign Up</button>
                    </form>
                    <p>
                        Already have an account?{''}
                        <NavLink to="/login">Sign In</NavLink>
                    </p>
                </div>
            </section>
        </main>
    )
}
export default SignUp;