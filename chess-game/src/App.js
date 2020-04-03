import React from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Canvas from './components/canvas'
import { connect } from 'react-redux';
import Toggle from './components/toggle';
import {showToggle, hideToggle} from './reducers/reducer';

export const  App = () => {
  const dispatch = useDispatch();
  const toggledId = 'MY_COMPONENT_TOGGLE';
  return (
    <div >
      <Toggle id={toggleId}>
        <Canvas onClick={() => dispatch(hideToggle(toggleId))}/>
      </Toggle>
      <button onClick={() => dispatch(showToggle(toggledId))}>Start Game</button>
      
    </div>
  );
  }

export default App;
