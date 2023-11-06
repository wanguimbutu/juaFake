import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import '../styles/home.css';
import {ethers} from "ethers";
import MetaMaskOnboarding from '@metamask/onboarding';



const Home=()=>{

    const navigate =useNavigate()
    const handleLogout =()=>{
        signOut(auth).then(()=>{
            //signout successful
            navigate('/login');
            console.log("Signed out successfully")
        }).catch((error)=>{

        });
    }
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                const uid =user.uid;
                console.log("uid",uid)
            }else{
                //user is signed out
                console.log("User is logged out")
            }
        });
    },[])
    const [logged,setLogged]=useState(false);
    const [account,setAccount]=useState(null);
    

    const forwarderOrigin ="http://localhost:3000";
    const onboarding =new MetaMaskOnboarding({forwarderOrigin});

    const {utils} =require("ethers");

    const handleWalletLogin=()=>{
        if(window.ethereum && window.ethereum.isMetaMask){
            console.log("MetaMask is here!");
            window.ethereum
            .request({method: "eth_requestAccounts"})
            .then((result)=>{
                console.log(result);
                setLogged(true);
                setAccount(utils.getAddress(result[0]));
            })
            .catch((error)=>{
                console.log("Could not detect account");
            });
        }else{
            console.log("Need to install metamask!");
            onboarding.startOnboarding();
        }
    };
     const handleWalletLogOut =()=>{
        setLogged(false);
        setAccount(null);
     }
    return(
        <>
       <nav className="navigation">
            <p>Welcome to Authentify</p>
            
            <button type="button" onClick={handleLogout}>Logout</button>
    
        </nav> 
        <div>
            {!logged ?(
                <div className="container">
                    <h1>Login with Metamask Wallet</h1> 
                    <button onClick={handleWalletLogin}>Connect wallet</button> 
                  </div>
            ):(
                <div>
                    <h1>Logged from {account}</h1>
                    <button onClick={handleWalletLogOut}>Disconnect wallet</button>
                </div>
            )}
        </div>
            
            
        </>
            
    );
}
export default Home;