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
        const myFunc=this.setImage;
        chrome.storage.local.get(["screenShot"],function (obj){
            myFunc(obj.screenShot);
        });
    }
    componentDidMount(){
    }
    setImage=async(image)=>{
        this.setState({
            image:image
        });
        var canvas = await document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        canvas.style.width = "80vw";
        canvas.style.height = "90vh";
        canvas.style.background="url("+image+")";
        canvas.style.backgroundSize="100% 100%";
        canvas.style.backgroundRepeat="no-repeat";

    }
    render(){
            return (
                <div style={{"height":"auto"}}>
                <canvas id="canvas" onClick={()=>history.push('/capture')}></canvas>
                </div>
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