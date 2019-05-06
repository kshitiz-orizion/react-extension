import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import screenShot from './screenShot.reducer';
export default combineReducers({
  form: formReducer,
  screenShot:screenShot
});