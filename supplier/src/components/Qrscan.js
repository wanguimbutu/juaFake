import { useState } from 'react';
import {useZxing} from 'react-zxing';

const constraints:MediaStreamConstraints ={
    video:true,
    audio:false,
};

const Qrscan =()=>{
    const [result,setResult] = useState("");
    const {ref} =useZxing({
        onDecodeResult(result) {
            setResult(result.getText());
        },
    });

    return (
        <>
        <video ref={ref} />
        <p>
            <span>Last result: </span>
            <span>{result}</span>
        </p>
        </>
    )
}
export default Qrscan;