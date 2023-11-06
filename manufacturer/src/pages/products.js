import { useState } from "react";
import QRCode from 'react-qr-code';
import '../styles/products.css'

const Products=()=>{
    const[value,setValue]=useState();
    const[back,setBack]=useState('#FFFFFF');
    const [fore,setFore]=useState('#000000')
    const[size,setSize]=useState(256);

    return(
        <div className="card">  
            <center>
                <h1>Generate QR code</h1>
                <input
                type="text"
                onChange={(e)=>setValue(e.target.value)}
                required
                placeholder="batch number"
                />
                <br/>
                <br/>
                <input
                    type="text"
                    onChange={(e)=>setBack(e.target.value)}
                    placeholder="BackgroundColor"
                />
                <br/>
                <br/>
                <input
                    type="text"
                    onChange={(e)=>setFore(e.target.value)}
                    placeholder="Foreground color"
                />
                <br/>
                <br/>
                <input
                    type="number"
                    onChange={(e)=>setSize(parseInt(e.target.value==='' ? 0:e.target.value,10))}
                    placeholder="qr-size"
                />
                <br/>
                <br/>
                {value && (
                    <QRCode
                        title ="Authentify"
                        value={value}
                        bgColor={back}
                        fgColor={fore}
                        size={size ===''?0:size}
                    />
                )}

                <button>Add Block</button>
            </center>
        </div>
    )
}
export default Products;