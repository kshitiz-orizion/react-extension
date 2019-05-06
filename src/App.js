/*global chrome*/
import React,{useState} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './Store';
import Routes from './Common/routes';
function App() {
  const [myImage, setmyImage] = useState();
  return (
    <div>
      <Provider store={store}>
          <Routes />
      </Provider>
    </div>
  );
}
export default App;
