import React from 'react'
import { Redirect } from 'react-router'
import Button from 'components/common/button'
import queryString from 'query-string'

import './common.scss'

const status = {
  ready: "ready",
  sending: "sending",
  sent: "sent",
  failed: "failed",
}

const requiredFields = [
  "name",
  "email",
  "phone",
  "country",
];

export default class LandingRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: status.ready,
      missingFields: false,
      count: 0,
    };
    this.updateIntercom = this.updateIntercom.bind(this);
  }

  updateIntercom() {

    // Check if intercome is ready, and update the user data.
    if (process.env.NODE_ENV === 'production' && typeof(window.Intercom) !== 'undefined') {
      window.Intercom("update", {
        name:  `${this.props.firstName} ${this.props.lastName}`,
        email: this.props.email,
        "landing_page": "true"
      });
      clearInterval(this.state.intervalId)
    } else {
      console.log("Intercom Not Ready!")
    }
  }
  componentWillMount(){
    const { firstName, lastName, email } = this.props;

    // Check if we have good data.
    if (!(firstName && lastName && email)) {
      console.warn("Landing Page: No valid parameters received, will not register with Intercom.");
      return
    }

    const intervalId = setInterval(this.updateIntercom, 1000)
    this.state.intervalId = intervalId
  }

  sendRequest() {

    // Performs some data validation to make sure everything was filled in.
    const allComplete = requiredFields.every(field => document.getElementById(field).value.length > 0);

    if(!allComplete){
      this.setState( { missingFields: true, count: this.state.count + 1 });
      return;
    }

    const emailParams = {
      timestamp: Date(),
      to_email: process.env.NODE_ENV === 'production' ? 'sales@voltera.io' : 'jesus@voltera.io',
      reply_to: document.getElementById('email').value,
      from_name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      country: document.getElementById('country').value,
    }

    // Change state to sending.
    this.setState({status: status.sending});
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm")
    window.emailjs.send("gmail","quick_quote", emailParams)
    .then((response) => this.emailSuccess(response), (err) => this.emailFailure(err));

  }

  emailSuccess(response) {
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    this.setState({ status: status.sent});
  }
  emailFailure(err) {
    console.log("FAILED. error=", err);
    this.setState({ status: status.failed});
  }

  renderSending() {
    return (
      <div>
        <h1>Please Wait</h1>
        <p className="pull-center">We are processing your request.</p>
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
        <p className="pull-center">Thank you for filling out your information.</p>
      </div>
    )
  }

  renderSent() {
    return <Redirect push to="/request/thankyou/" />
  }

  renderFailed(){
    return (
      <div className="pull-center">
        <h1>Uh Oh!</h1>
        <p>We are sorry, there was an issue processing your request. Please try again later or email <strong>sales@voltera.io</strong></p>
        <div className="button-wrapper">
          <Button label="Return" url={"/"} color="dark" internal/>
        </div>
      </div>
    );
  }

  renderRequest() {
    const nameDefault = this.props.firstName ? `${this.props.firstName} ${this.props.lastName}` : ""
    const emailDefault = this.props.email
    return (
      <div>
        <h2>Request a quote.</h2>
        <form>
          <h3>Contact Information</h3>
          <div className="format">
            <p>Name: <input className="text-input" type="text" id="name" name="name" defaultValue={nameDefault}/></p>
            <p>Email: <input className="text-input" type="email"  id="email" name="email"  autoComplete="email" defaultValue={emailDefault}/></p>
            <p>Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" /></p>
            <p>Country: <input className="text-input" name="ship-country" id="country"  autoComplete="shipping country" /></p>
          </div>
        </form>
        {this.state.missingFields ? <p className="missing">Please fill out of all of the required fields! ({this.state.count})</p> : null}
        <div className="button-wrapper">
          <Button label="Submit" color="dark" onClick={this.sendRequest.bind(this)}/>
        </div>
      </div>
    );
  }

  renderVideo() {
    if (typeof(window) !== 'undefined') {

      var width = Math.min(window.innerWidth - 120, 620) // Trim in case of mobile.
      var height = Math.round(width / (620/349)) // Find the corresponding height to preserve the aspect ratio.

      // We apply the css dynamically since we do not know width ahead of time.
      const style = {
        width: `${width}px`,
        height: `${height}px`,
      };

      return <div className="wistia_embed wistia_async_nlmo66xcfu" style={style}>&nbsp;</div>
    }
  }

  renderStatus() {
    switch(this.state.status) {
      case status.ready:
      return this.renderRequest();
      case status.sending:
      return this.renderSending();
      case status.sent:
      return this.renderSent();
      case status.failed:
      return this.renderFailed();
    }
  }

  render() {
    return (
      <div className="landing-wrapper">
        <div className="request">
          <h1>Hi {this.props.firstName || "there"}!</h1>
          <p className="pull-center">We thought you might be interested in this. Let us know what you think!</p>
          {this.renderVideo()}
          {this.renderStatus()}
        </div>
      </div>
    );
  }
}
