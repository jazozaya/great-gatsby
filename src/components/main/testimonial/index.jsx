import React from "react";
import dyson from './james-dyson.jpg'

import "./testimonial.scss";

export default class Testimonial extends React.Component {
  render() {
    return (
      <div className="testimonial-wrapper">
        <div className="testimonial">
          <div className="description">
            <p className="quote">
              &ldquo;As an engineer, I know the frustrations of waiting for circuit boards, and the Voltera V-One elegantly solves this
              problem.&rdquo;
            </p>
            <h3 className="author">Sir James Dyson - Inventor & founder.</h3>
          </div>
          <a href="http://www.dyson.com/community/aboutdyson.aspx" target="_blank" rel="noopener noreferrer">
            <img width="150" height="150" src={dyson} alt="" />
          </a>
        </div>
      </div>
    );
  }
}
