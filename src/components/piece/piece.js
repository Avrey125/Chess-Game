import React, {useState} from 'react';
import './piece.css';



const Piece = props => {

  const [state, setState] = useState({
    name: '',
    id: '',
    placement: props.id,
    color: props.color,
  });

return <div style={state.color === 'black' ? {backgroundColor: 'black'} : {backgroundColor: 'white'}} id={state.id} className='piece'> {state.placement}</div>;
};

export default Piece;
