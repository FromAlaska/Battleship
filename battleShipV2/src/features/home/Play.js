import React, { Component } from 'react';
import { boardDraw } from './redux/actions.js';

export default class Play extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="home-play">
        <div class="topnav">
          <a href="default-Page">Home</a>
          <a class="active" href="Play">Play Battleship!</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div id="board"></div>
        
      </div>
    );
  }
}
