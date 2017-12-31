import {RECENT_SEARCH} from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {

    case RECENT_SEARCH:
      if (state.length <= 4)
        return [action.payload, ...state];

      else {
        state.pop();
        return [action.payload, ...state];
      }
  }

  return state;
}
