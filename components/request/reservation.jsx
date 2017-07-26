import React from 'react'
import './common.scss'

import DatePicker from 'react-datepicker';
import moment from 'moment';

import Button from 'components/common/button'
import 'react-datepicker/dist/react-datepicker.css';

const status = {
  ready: "ready",
  sending: "sending",
  sent: "sent",
  failed: "failed",
}

const requiredFields = [
  'fname',
  'lname',
  'email',
  'company',
  'website',
  'phone',
];

export default class ReservationRequest extends React.Component {

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

    const emailParams = {
      to_email: process.env.NODE_ENV === 'production' ? 'sales@voltera.io' : 'jesus@voltera.io',
      reply_to: document.getElementById('email').value, // Not used.
      email: document.getElementById('email').value,
      from_name: `${document.getElementById('fname').value} ${document.getElementById('lname').value}`,
      phone: document.getElementById('phone').value,
      company: document.getElementById('company').value,
      website: document.getElementById('website').value,
    }

    // // Change state to sending.
    this.setState({status: status.sending});
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm")
    window.emailjs.send("gmail","reservation_request", emailParams)
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
      <p className="pull-center">Thank you for the interest in Voltera!</p>
    </div>)
  }

  renderSent() {

    return (<div className="pull-center">
    <h1>Congratulations!</h1>
    <p>You have reserved a unit. We will follow up in a few weeks to see how we can help!</p>
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
    <h1>Place a unit on hold!</h1>
    <img src="/assets/v-one-in-box-small.png"/>
    <form>
      <p>
        Want a V-One but do not have the budget yet?
      </p>
      <p>
        Or maybe you need approval from your supervisor, purchasing manager, husband or wife?
      </p>
      <p>The V-Ones are produced in limited quantities, but you can place a unit on hold.  We will reach out in a few weeks!
      </p>

      <h3>Contact Information</h3>
      <div className="format">
        <p>First Name: <input className="text-input" type="text" id="fname" name="fname" /></p>
        <p>Last Name: <input className="text-input" type="text" id="lname" name="lname" /></p>
        <p>Email: <input className="text-input" type="email"  id="email" name="email"  autoComplete="email" /></p>
        <p>Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" /></p>
        <p>Company: <input className="text-input" id="company" name="company" autoComplete="company" /></p>
        <p>Website: <input className="text-input" id="website" name="website" /></p>
      </div>
    </form>
    {this.state.missingFields ? <p className="missing">Please fill out all of the form fields! ({this.state.count})</p> : null}
    <div className="button-wrapper">
      <Button label="Reserve Unit" color="dark" onClick={this.sendRequest.bind(this)}/>
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
    <div className="request">
      <div className="request-wrapper">
        {this.renderStatus()}
      </div>
    </div>);
  }
}
