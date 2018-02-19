import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RedditList } from './';
import { counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList } from './redux/actions';

export class IndexPage extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className="home-index-page">
        <h1>Welcome to Battleship!</h1>
        
        <div className="slideshow-container">
          <div class="numberText">1 / 3</div>
          <img src="./src/images/logo.png"></img>
          <div className="text">Caption Text</div>
        </div>

        <div className="slideshow-container">
          <div class="numberText">2 / 3</div>
          <img src="./src/images/logo.png"></img>
          <div className="text">Caption Two</div>
        </div>

        <div className="slideshow-container">
          <div class="numberText">3 / 3</div>
          <img src="./src/images/logo.png"></img>
          <div className="text">Caption Three</div>
        </div>

        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
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
    actions: bindActionCreators({ counterPlusOne, counterMinusOne, resetCounter, fetchRedditReactjsList }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
