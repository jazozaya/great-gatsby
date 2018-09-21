import React from 'react'
import { Redirect } from 'react-router'
import Button from 'components/common/button'
import SpinnerLoader from 'components/common/spinnerLoader'
import YouTube from 'components/common/youtube'

import Specs from 'components/common/specs'

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
  }

  sendRequest() {

    // Performs some data validation to make sure everything was filled in.
    const allComplete = requiredFields.every(field => document.getElementById(field).value.length > 0);

    if(!allComplete){
      this.setState( { missingFields: true, count: this.state.count + 1 });
      return;
    }


    const { sourceDetails, landingType } = this.props;

    const emailParams = {

      // Information about the email:
      subject: landingType,
      timestamp: Date(),

      // Information about them.
      to_email: process.env.NODE_ENV === 'production' ? 'forms@voltera.io' : 'jesus@voltera.io',
      reply_to: document.getElementById('email').value,
      from_name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      country: document.getElementById('country').value,


      // Information about their source.
      utm_source: sourceDetails.utm_source,
      utm_medium: sourceDetails.utm_medium,
      utm_campaign: sourceDetails.utm_campaign,
      utm_term: sourceDetails.utm_term,
      utm_content: sourceDetails.utm_content
    }

    // Change state to sending.
    this.setState({status: status.sending});
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm")
    window.emailjs.send("gmail","quick_question", emailParams)
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
        <SpinnerLoader />
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
    return (
      <div>
        <h2>Want to know more?</h2>
        <form>
          <h3>Contact Information</h3>
          <div className="format">
            <p>Name: <input className="text-input" type="text" id="name" name="name" autoComplete="name"/></p>
            <p>Email: <input className="text-input" type="email"  id="email" name="email"  autoComplete="email"/></p>
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
    const { videoId } = this.props;
    if (typeof(window) !== 'undefined') {
      var width = Math.min(window.innerWidth - 100, 601) // Trim in case of mobile.
      var height = Math.round(width / (560/315)) // Find the corresponding height to preserve the aspect ratio.

      return <YouTube
          width={width}
          videoId={videoId}
          url={`/landing/${videoId}.jpg`}
        />
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
          <h1>Hi there!</h1>
          <p className="pull-center">Check out this video for a detailed walkthrough of our tool!</p>
          {this.renderVideo()}
          {this.renderStatus()}
        </div>
        <Specs />
      </div>
    );
  }
}
