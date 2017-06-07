import React from 'react'

import './testimonial.scss'

export default class Testimonial extends React.Component {

  render() {
    return (<div className="testimonial">
    <div className="testimonial-wrapper">
      <div>
        <p className="quote">&ldquo;As an engineer, I know the frustrations of waiting for circuit boards, and the Voltera V-One elegantly solves this problem.&rdquo;</p>
        <h3 className="author">Sir James Dyson - Inventor & founder.</h3>
      </div>
      <div>
        <a href="http://www.dyson.com/community/aboutdyson.aspx" target="_blank">
          <img width="150" height="150" src="/assets/testimonial/james-dyson.jpg" />
        </a>
      </div>
    </div>
  </div>);
}
}
