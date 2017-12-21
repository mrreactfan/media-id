import FETCH_MEDIAID from '../actions/index';


export default function(state = [], action){
  console.log('Action Received', action);
  switch(action.type){
    case FETCH_MEDIAID:
      return action.payload.data;
  }
  console.log(action.payload.data);
  return state;
}
