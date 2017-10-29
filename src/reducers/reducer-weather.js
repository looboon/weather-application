import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], actions) {
  switch(actions.type) {
    case FETCH_WEATHER:
      return [ actions.payload.data , ...state ];
  }
  return state;
}
