import {SELECTED_SONG} from '../actions/index';


export default function(state = null, action){

  switch(action.type){
    case SELECTED_SONG:
    return action.payload;
  }

return state;
}
