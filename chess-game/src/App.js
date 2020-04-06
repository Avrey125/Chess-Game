import React from 'react';
import './App.css';

import PropTypes from 'prop-types';
import Canvas from './components/canvas'
import { connect } from 'react-redux';

const  App = () => {

  return (
    <div>
      <Canvas /> 
    </div>
  );
}

// mapStateToProps = (state) => {
//   return {

//   }
// }


export default connect()(App);
