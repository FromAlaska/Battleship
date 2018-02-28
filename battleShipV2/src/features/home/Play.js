import React, { Component } from 'react';

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
        <script src="./redux/actions.js"></script>
      </div>
    );
  }
}
