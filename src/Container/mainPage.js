/*global chrome*/

import React from 'react';
import { connect } from 'react-redux';
import {setImage} from '../Store/Action/screenShot/screenShot.action';
import history from '../Inits/history';
import html2canvas from 'html2canvas';
class mainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={image:null};
    }
    componentDidMount(){
        const myFunc=this.myFunc;
        window.onbeforeunload = function() {
            myFunc();
        }.bind(this);
        const setImage=this.setImage;
        chrome.storage.local.get(["screenShot"],function (obj){
            if(obj.screenShot!=="deleteScreenShot"){
                setImage(obj.screenShot);
            }else{
                setImage(undefined);
            }
        });
    }
    myFunc=()=>{
        chrome.storage.local.set({ "screenShot": this.state.screenShot });
    }
    setImage=async (image)=>{
        this.setState({
            screenShot:image
        });
        var canvas = await document.getElementById("canvas");
        if(canvas){
            var ctx = canvas.getContext("2d");
            canvas.style.width = "80vw";
            canvas.style.height = "90vh";
            canvas.style.background="url("+image+")";
            canvas.style.backgroundSize="100% 100%";
            canvas.style.backgroundRepeat="no-repeat";
            chrome.storage.local.set({ "screenShot": "deleteScreenShot" });
        }
    }
    captureImage=()=>{
        chrome.tabs.captureVisibleTab(null, {}, function (image) {
            chrome.storage.local.set({ "screenShot": image }, function() {
                chrome.tabs.create({"url":chrome.extension.getURL('./index.html'),"active":true});
            });
        });
    }
    render(){
            return (
                <React.Fragment>
                    {this.state.screenShot ? 
                        <canvas id="canvas"></canvas>
                        :
                        <div style={{"height":"100px"}}>
                            <button onClick={()=>this.captureImage()}>Take Image</button>
                            <button>Take Video</button>                           
                        </div> 
                    } 
                </React.Fragment>
            )

    }
}

const mapStateToProps = state => {
    return {
        screenShot:state.screenShot.screenShot
    };
  };
  const mapDispatchToProps = {
    setImage
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(mainPage);