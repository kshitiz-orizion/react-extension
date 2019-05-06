import React from 'react';
import { connect } from 'react-redux';
import {setImage} from '../Store/Action/screenShot/screenShot.action';

class capturePage extends React.Component{
    render(){
        return (
            <div>
                this is capture page
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state);
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
  )(capturePage);