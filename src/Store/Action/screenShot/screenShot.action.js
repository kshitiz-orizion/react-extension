
import { SET_IMAGE_START,SET_IMAGE_SUCCESS,SET_IMAGE_ERROR} from './screenShot.actiontype';

export const setImage = (image) => async (dispatch) => {
    try{
        dispatch({ type: SET_IMAGE_START });
        dispatch({ type: SET_IMAGE_SUCCESS,payload:image });
    }
    catch(error){
        console.log(error);
        dispatch({ type: SET_IMAGE_ERROR});
    }
};