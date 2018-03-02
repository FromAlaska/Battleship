import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class GamePlay extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  makeBoard(cols, rows) {
    var board = [];
    var cellSize = cols*rows;
    var buffer;

    for (let i=0; i < cols; i++) {
      for (let j=0; j < rows; j++) {
        var cellLeft = j * cellSize;
        var cellTop = i * cellSize;
        buffer = function() {board.style.left = cellLeft; board.style.top = cellTop;};
        var cell = React.createElement("div", null, buffer);
        //var cellContainer = [];
        //cellContainer.push(cell);
        board.push(cell);
      }
    }

    return board;
  }

  render() {
    return (
      <div className="home-game-play">
        <div className="topnav">
          <a href="default-Page">Home</a>
          <a className="active" href="game-start">Play!</a>
          <a href="#contact">Contact</a>
          <a href="about">About</a>
        </div>
        <div className="board">
          {this.makeBoard(10,10)}
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePlay);
