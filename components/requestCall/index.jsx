import React from 'react'
import './requestCall.scss'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import Button from 'components/common/button'

const status = {
  ready: "ready",
  sending: "sending",
  sent: "sent",
  failed: "failed",
}

const requiredFields = [

];

export default class QuoteRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment()
      status: status.ready,
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
    }

    // Change state to sending.
    this.setState({status: status.sending});

    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm")
    window.emailjs.send("gmail","quote_request", emailParams)
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
    return (<div>
      <h1>Please Wait</h1>
      <p className="pull-center">We are processing your request.</p>
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
      <p className="pull-center">Thank you for filling out your information.</p>
    </div>)
  }

  renderSent() {
    return (<div className="pull-center">
      <h1>Success!</h1>
      <p>We have received your request. We will be in touch soon!</p>
      <div className="button-wrapper">
        <Button label="Return" url={"/"} color="dark" internal/>
      </div>
    </div>);
  }

  renderFailed(){
    return (<div className="pull-center">
        <h1>Uh Oh!</h1>
        <p>We are sorry, there was an issue processing your request. Please try again later or email <strong>sales@voltera.io</strong></p>
        <div className="button-wrapper">
          <Button label="Return" url={"/"} color="dark" internal/>
        </div>
    </div>);
  }

  renderRequest() {
    return (<div>
      <h1>Schedule a Call.</h1>
      <form>
        <h3>Contact Information</h3>
        <div className="format">
          <p>First Name: <input className="text-input" type="text" id="fname" name="fname" /></p>
          <p>Last Name: <input className="text-input" type="text" id="lname" name="lname" /></p>
          <p>Email: <input className="text-input" type="email"  id="email" name="email"  autoComplete="email" /></p>
          <p>Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" /></p>
          <p>Company: <input className="text-input" id="company" name="company" autoComplete="company" /></p>
          <p>Website: <input className="text-input" id="website" name="website" /></p>
        </div>
        <h3>Pick a Time</h3>
          <p></p>





      </form>
      {this.state.missingFields ? <p className="missing">Please fill out of all of the required fields! ({this.state.count})</p> : null}
      <div className="button-wrapper">
        <Button label="Schedule" color="dark" onClick={this.sendQuoteRequest.bind(this)}/>
      </div>
    </div>
  );
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
    <div className="quote-request">
      <div className="quote-request-wrapper">
        {this.renderStatus()}
      </div>
    </div>);
  }
}
