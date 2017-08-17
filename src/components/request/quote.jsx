import React from 'react'
import './common.scss'

import Button from 'components/common/button'


const quoteStatus = {
  ready: "ready",
  sending: "sending",
  sent: "sent",
  failed: "failed",
}

const requiredFields = [
  "fname",
  "lname",
  "email",
  "phone",
  "street",
  "city",
  "state",
  "postal",
  "country",
  "find-out"
];

export default class QuoteRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quoteStatus: quoteStatus.ready,
      missingFields: false,
      count: 0,

    };
  }

  sendQuoteRequest() {

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
      email: document.getElementById('email').value,
      from_name: `${document.getElementById('fname').value} ${document.getElementById('lname').value}`,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value,
      profile: document.getElementById('profile').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      postal: document.getElementById('postal').value,
      country: document.getElementById('country').value,
      additional_item: document.getElementById('additional-item').value,
      find_out: document.getElementById('find-out').value,
      additional_comment: document.getElementById('additional-comment').value
    }

    // Change state to senting.
    this.setState({quoteStatus: quoteStatus.sending});

    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm")
    window.emailjs.send("gmail","quote_request", emailParams)
    .then((response) => this.emailSuccess(response), (err) => this.emailFailure(err));

  }

  emailSuccess(response) {
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    this.setState({ quoteStatus: quoteStatus.sent});
  }
  emailFailure(err) {
    console.log("FAILED. error=", err);
    this.setState({ quoteStatus: quoteStatus.failed});
  }

  renderQuoteSending() {
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

  renderQuoteSent() {
    return (
      <div className="pull-center">
        <h1>Success!</h1>
        <p>We have received your request. We will be in touch soon!</p>
        <div className="button-wrapper">
          <Button label="Return" url={"/"} color="dark" internal/>
        </div>
      </div>
    );
  }

  renderQuoteFailed(){
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

  renderQuoteRequest() {
    return (
      <div>
        <h1>Request a quote.</h1>
        <form>
          <h3>Contact Information</h3>
          <div className="wrapper">
            <p className="wide-text">Profile:</p>
            <select className="wide-select" id="profile" name="profile-type">
              <option value="select">Please Select</option>
              <option value="researcher">Academic Researcher</option>
              <option value="educator">Educator</option>
              <option value="business">Business</option>
              <option value="hobbyist">Hobbyist</option>
              <option value="makerspace">Makerspace / Fablab</option>
            </select>
          </div>
          <div className="format">
            <p>First Name: <input className="text-input" type="text" id="fname" name="fname" /></p>
            <p>Last Name: <input className="text-input" type="text" id="lname" name="lname" /></p>
            <p>Email: <input className="text-input" type="email"  id="email" name="email"  autoComplete="email" /></p>
            <p>Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" /></p>
            <p>Company: <input className="text-input" id="company" name="company" autoComplete="company" /></p>
            <p>Website: <input className="text-input" id="website" name="website" /></p>
          </div>
          <h3>Shipping Information</h3>
          <div className="wrapper">
            <p className="wide-text">Street: </p>
            <input className="wide-select" name="ship-address"  id="street"  autoComplete="shipping street-address" />
          </div>
          <div className="format">
            <p>City: <input className="text-input" name="ship-city" id="city"  autoComplete="shipping locality" /></p>
            <p>State/Region: <input className="text-input" name="ship-state" id="state"  autoComplete="shipping region" /></p>
            <p>Postal Code: <input className="text-input" name="ship-zip" id="postal"  autoComplete="shipping postal-code" /></p>
            <p>Country: <input className="text-input" name="ship-country" id="country"  autoComplete="shipping country" /></p>
          </div>
          <h3>Extra Information</h3>
          <p>Would you like to add anything else to your order?</p><textarea placeholder="(Optional)" id="additional-item"/>
          <p>Any additional data you require on the quote?</p><textarea  placeholder="(Optional)" id="additional-comment"/>
          <p>How did you find out about the Voltera V-One?</p><textarea id="find-out"/>
        </form>
        {this.state.missingFields ? <p className="missing">Please fill out of all of the required fields! ({this.state.count})</p> : null}
        <div className="button-wrapper">
          <Button label="Submit" color="dark" onClick={this.sendQuoteRequest.bind(this)}/>
        </div>
      </div>
    );
  }

  renderQuoteStatus() {
    switch(this.state.quoteStatus) {
      case quoteStatus.ready:
      return this.renderQuoteRequest();
      case quoteStatus.sending:
      return this.renderQuoteSending();
      case quoteStatus.sent:
      return this.renderQuoteSent();
      case quoteStatus.failed:
      return this.renderQuoteFailed();
    }
  }

  render() {
    return (
      <div className="request">
        <div className="request-wrapper">
          {this.renderQuoteStatus()}
        </div>
      </div>);
    }
  }
