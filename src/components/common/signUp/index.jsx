import React from 'react'
import Bowser from 'bowser'

import "./signup.scss"

const popStatus = {
  notShown: "notShown",
  showing: "showing",
  processed: "processed"
}

export default class Specs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: popStatus.notShown
    }
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleMouseLeave(e) {
    if( e.clientY < 0){
      document.removeEventListener("mouseleave", this.handleMouseLeave, false);  // Cleanup by removing listener.
      this.setState({show: popStatus.showing })
    }
  }

  componentDidMount() {
    // Bind a listener to trigger when mouse exits window - but wait about 40 seconds. (about 55% of our average page time)
    if(!Bowser.mobile) {
      setTimeout(() => document.addEventListener("mouseleave", this.handleMouseLeave, false), 40000);
    }

  }
  componentWillUnmount() {
    document.removeEventListener("mouseleave", this.handleMouseLeave, false);
  }

  onSubmit() {
    // I have to add a delay, because:
    // If processed right away, the form is removed from DOM and it cannot be submitted.
    // If I delay a bit, the form action can be processed before and then the pop up is removed.
    setTimeout(() => this.setState({show: popStatus.processed}), 100)
  }

  render() {

    if (this.state.show !== popStatus.showing) {
      return null;
    }

    return (
      <div className="signup-wrapper">
        <div className="signup">
          <div onClick={() => this.setState({show: popStatus.processed})} className="close">X</div>
          <h1>We have big news coming up!</h1>
          <p>Sign up below to stay in the loop.</p>
          <form action="https://voltera.us7.list-manage.com/subscribe/post?u=5e2801d5f399b19d163b280f7&amp;id=4ab4eb46aa" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form" target="_blank" noValidate onSubmit={this.onSubmit}>
            {/*-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->*/}
            <div className="spam-field" aria-hidden="true">
              <input type="text" name="b_5e2801d5f399b19d163b280f7_4ab4eb46aa" tabIndex="-1" value=""/>
            </div>
            <input className="form-email"type="email" defaultValue="" name="EMAIL"  id="mce-EMAIL" placeholder="Email address" required/>
            <input className="form-button" type="submit" value="Sign Up!" name="subscribe" id="mc-embedded-subscribe"/>
          </form>
        </div>
      </div>
    )
  }
}
