import React, { Component } from 'react';

export default class Play extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div className="home-play">
        Component content: home/Play
        <p>test</p>
        <div class="topnav">
          <a class="active" href="#DefaultPage">Home</a>
          <a href="Play">Play Battleship!</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}
