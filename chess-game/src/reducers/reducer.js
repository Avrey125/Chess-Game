const initialState = {
  
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case 'MOVEMENT':
    return action.movement;
  default: 
    return state;
  }
}



export default reducer;