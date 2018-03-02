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

  turnPurple() {
  }

  makeBoard(cols) {
    var indents = [];
    var idString;
    for (let i=0; i < cols; i++) {
      idString = 'cell: ' + i;
      indents.push(<div id = {idString} onClick={this.turnPurple}> </div>);
    }
    return indents;
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
        {this.makeBoard(100)}
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
