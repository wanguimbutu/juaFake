import {Html5QrcodeScanner} from 'html5-qrcode';
import {Html5Qrcode} from 'html5-qrcode';
import { Component } from 'react';

const qrcodeRegionId = "html5qr-code-full-region";

class Scan extends Component{
    render(){
        return <div id={qrcodeRegionId}/>
    }

    componentWillUnmount(){
        this.htmlQrcodeScanner.clear().catch(error =>{
            console.error("Failed to clear html5QrcodeScanner ", error);
        });

    }

    componentDidMount(){
        function craeteConfig(props){
            var config ={};
            if(props.fps){
                config.fps =props.fps;
            }
            if(props.qrbox){
                config.qrbox =props.qrbox;
            }
            if(props.aspectRatio){
                config.aspectRatio =props.aspectRatio;
            }
            if(props.disableFlip !== undefined){
                config.disableFlip =props.disableFlip;
            }
            return config;
        }

        var config =craeteConfig(this.props);
        var verbose =this.props.verbose === true;

        if(!(this.props.qrCodeSuccessCallback)){
            throw "qrCodesuccessCallback is required";
        }
        this.htmlQrcodeScanner = new Html5QrcodeScanner(
            qrcodeRegionId,config,verbose
        );
        this.htmlQrcodeScanner.render(
            this.props.qrCodeSuccessCallback,
            this.props.qrCodeErrorCallback
        );
    }
};

export default Scan;