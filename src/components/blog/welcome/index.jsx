import React from 'react'

import './welcome.scss'

export default class Welcome extends React.Component {

  render() {
    return(
      <div className="welcome-wrapper">
          <section className="welcome">
            <h1>Welcome to our blog</h1>
            <p>Join us on our journey to modernize hardware prototyping</p>
        </section>
      </div>
    )
  }
}
