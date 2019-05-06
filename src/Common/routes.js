import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import history from '../Inits/history';
import capturePage from '../Container/capturePage';
import mainPage from '../Container/mainPage';
const Routes=(props)=>{
    return (
        <Router history={history}>
            <Switch>
                <Route exact={true} path="/" component={mainPage} image={props.image}/>
                <Route exact={true} path="/capture" component={capturePage}/>
            </Switch>
      </Router>
    )
}

export default Routes