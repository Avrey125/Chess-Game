import React from 'react';
import './App.css';

import PropTypes from 'prop-types';
import Board from '../board/board'
import { connect } from 'react-redux';

const  App = () => {

  return (
    <div>
      <Board /> 
    </div>
  );
}

// mapStateToProps = (state) => {
//   return {

//   }
// }


export default connect()(App);
