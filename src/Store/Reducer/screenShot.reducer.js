import { SET_IMAGE_START,SET_IMAGE_SUCCESS,SET_IMAGE_ERROR} from '../Action/screenShot/screenShot.actiontype';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_IMAGE_START:
      return {
        ...state,
        isProcessing: true,
      };
    case SET_IMAGE_SUCCESS: {
      return {
        ...state,
        screenShot: action.payload,
        isProcessing: false,
      };
    }
    case SET_IMAGE_ERROR:{
        return {
            ...state,
            isProcessing:false
        }
    }
    default:
      return state;
  }
}