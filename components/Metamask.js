import {ethers} from 'ethers';
import MetaMaskOnboarding from "@metamask/onboarding";
import { useState } from 'react';

import Onboarding from '@metamask/onboarding';


function Metamask(){

    const [logged,setLogged]=useState(false);
    const[account, setAccount] =useState(null);
    const forwarderOrigin ="http://localhost:3000";
    const onboarding =new MetaMaskOnboarding({forwarderOrigin});
    const {utils} = require('ethers');
    
    
    const handleConnect =()=>{
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
            console.log("install meatamask extension");
            Onboarding.startOnboarding();
        }
    };
    const handleDisconnect =()=>{
        setLogged(false);
        setAccount(null);
    }
    const cardStyle ={
        width:'18rem',
        height:'300',

    };

        return (
            <div className='card' style={cardStyle} >
              {!logged ? (
                <div className="card-body">
                  <h1 className='card-title'>Log in with Metamask wallet</h1>
                  <button className=' btn btn-primary'onClick={handleConnect}>Log In</button>
                </div>
              ) : (
                <div className="card-body">
                  <h1>Logged from {account}</h1>
                  <button onClick={handleDisconnect}>Log Out</button>
                  <br></br>
                  <br></br>
                </div>
              )}
            </div>
          );
}
export default Metamask;