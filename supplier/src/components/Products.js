import { useNavigate } from 'react-router-dom';
import './Products.css'
function Products(){
    const navigate =useNavigate()
    const handleScan=()=>{
        navigate('/qrscan')
    }
    return(
        <div className="container">
            <form>
                <label>
                    Serial Number:
                    <input type="text" name="Serial Number"/>
                </label>
                <label>
                    Product Name:
                    <input type="text" name="Product Name"/>
                </label>
                <label>
                    Source:
                    <input type="text" name="Source"/>
                </label>
                <label>
                    Destination:
                    <input type="text" name="Destination"/>
                </label>
                <button onClick={handleScan}>Scan QR Code</button>
                <div className='btn'>
                  
                <input type="submit" value="Add Block"/>
                </div>
            </form>
        </div>
    )
}
export default Products;