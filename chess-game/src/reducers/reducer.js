const initialState = {
}

function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SHOW':
        return{...state, [action.payload]: true};
      case 'HIDE':
        return {...state, [action.payload]: false};
      default: 
      return state;
    }
  };

export const showToggle = id => ({type: 'SHOW', payload: id});
export const hideToggle = id => ({type: 'HIDE', payload: id});

export default reducer