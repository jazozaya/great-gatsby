import React from "react";
import MediaQuery from "react-responsive";
import { navigate } from "gatsby";

import DatePicker from "react-datepicker";
import moment from "moment";

import "./common.scss";

import Button from "components/common/button";
import SpinnerLoader from "components/common/spinnerLoader";

import { validateEmail } from "./utils/api";

import "react-datepicker/dist/react-datepicker.css";
import { mobileThreshold } from "../../constants";

const status = {
  ready: "ready",
  sending: "sending",
  failed: "failed"
};

const requiredFields = ["name", "email", "company", "city", "country", "phone", "time", "timezone"];

export default class QuoteRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: status.ready,
      missingFields: false,
      invalidEmail: false,
      selectedDate: "",
      highlightedDay: moment()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // Handler for the date change.
  handleChange(date) {
    this.setState({
      highlightedDay: date,
      selectedDate: date.format("MMMM Do YYYY")
    });
  }

  isWeekday = date => {
    const day = date.day();
    return day !== 0 && day !== 6;
  };

  sendRequest() {
    // Performs some data validation to make sure everything was filled in.
    const allComplete = requiredFields.every(field => document.getElementById(field).value.length > 0);

    if (!allComplete || this.state.selectedDate.length === 0) {
      this.setState({ invalidEmail: false, missingFields: true });
      return;
    }

    // Ensure the email we are getting is valid.
    if (!validateEmail(document.getElementById("email").value)) {
      this.setState({ invalidEmail: true, missingFields: false });
      return;
    }

    const emailParams = {
      timestamp: Date(),
      to_email: process.env.NODE_ENV === "production" ? "forms@voltera.io" : "jesus@voltera.io",
      reply_to: document.getElementById("email").value,
      email: document.getElementById("email").value,
      from_name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      company: document.getElementById("company").value,
      city: document.getElementById("city").value,
      country: document.getElementById("country").value,
      time: document.getElementById("time").value,
      timezone: document.getElementById("timezone").value,
      date: this.state.selectedDate,
      additional_item: document.getElementById("additional-item").value,
      referrer: document.referrer ? document.referrer : "Unknown"
    };

    // // Change state to sending.
    this.setState({ status: status.sending });
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm");
    window.emailjs.send("gmail", "call_request", emailParams).then(response => this.emailSuccess(response), err => this.emailFailure(err));
  }

  emailSuccess(response) {
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    navigate("/request/thankyou/?q=RFC");
  }
  emailFailure(err) {
    console.log("FAILED. error=", err);
    this.setState({ status: status.failed });
  }

  renderSending() {
    return (
      <div>
        <h1>Please Wait</h1>
        <p className="pull-center">We are processing your request.</p>
        <SpinnerLoader />
        <p className="pull-center">Thank you for the interest in Voltera!</p>
      </div>
    );
  }

  renderFailed() {
    return (
      <div className="pull-center">
        <h1>Uh Oh!</h1>
        <p>
          We are sorry, there was an issue processing your request. Please try again later or email <strong>sales@voltera.io</strong>
        </p>
        <div className="button-wrapper">
          <Button label="Return" url={"/"} color="dark" internal />
        </div>
      </div>
    );
  }

  renderTimeZone() {
    return (
      <div>
        <MediaQuery maxWidth={mobileThreshold}>
          <select className="time-select" id="timezone">
            <option value="">Please Select...</option>
            <option value="GMT -12.0">(GMT -12:00)</option>
            <option value="GMT -11.0">(GMT -11:00)</option>
            <option value="GMT -10.0">(GMT -10:00)</option>
            <option value="GMT -9.0">(GMT -9:00)</option>
            <option value="GMT -8.0">(GMT -8:00)</option>
            <option value="GMT -7.0">(GMT -7:00)</option>
            <option value="GMT -6.0">(GMT -6:00)</option>
            <option value="GMT -5.0">(GMT -5:00)</option>
            <option value="GMT -4.0">(GMT -4:00)</option>
            <option value="GMT -3.5">(GMT -3:30)</option>
            <option value="GMT -3.0">(GMT -3:00)</option>
            <option value="GMT -2.0">(GMT -2:00)</option>
            <option value="GMT -1.0">(GMT -1:00)</option>
            <option value="GMT 0.0">(GMT)</option>
            <option value="GMT +1.0">(GMT +1:00)</option>
            <option value="GMT +2.0">(GMT +2:00)</option>
            <option value="GMT +3.0">(GMT +3:00)</option>
            <option value="GMT +3.5">(GMT +3:30)</option>
            <option value="GMT +4.0">(GMT +4:00)</option>
            <option value="GMT +4.5">(GMT +4:30)</option>
            <option value="GMT +5.0">(GMT +5:00)</option>
            <option value="GMT +5.5">(GMT +5:30)</option>
            <option value="GMT +5.75">(GMT +5:45)</option>
            <option value="GMT +6.0">(GMT +6:00)</option>
            <option value="GMT +7.0">(GMT +7:00)</option>
            <option value="GMT +8.0">(GMT +8:00)</option>
            <option value="GMT +9.0">(GMT +9:00)</option>
            <option value="GMT +9.5">(GMT +9:30)</option>
            <option value="GMT +10.0">(GMT +10:00)</option>
            <option value="GMT +11.0">(GMT +11:00)</option>
            <option value="GMT +12.0">(GMT +12:00)</option>
          </select>
        </MediaQuery>
        <MediaQuery minWidth={mobileThreshold}>
          <select className="time-select" id="timezone">
            <option value="">Please Select...</option>
            <option value="GMT -12.0">(GMT -12:00) Eniwetok, Kwajalein</option>
            <option value="GMT -11.0">(GMT -11:00) Midway Island, Samoa</option>
            <option value="GMT -10.0">(GMT -10:00) Hawaii</option>
            <option value="GMT -9.0">(GMT -9:00) Alaska</option>
            <option value="GMT -8.0">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
            <option value="GMT -7.0">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
            <option value="GMT -6.0">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
            <option value="GMT -5.0">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
            <option value="GMT -4.0">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
            <option value="GMT -3.5">(GMT -3:30) Newfoundland</option>
            <option value="GMT -3.0">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
            <option value="GMT -2.0">(GMT -2:00) Mid-Atlantic</option>
            <option value="GMT -1.0">(GMT -1:00 hour) Azores, Cape Verde Islands</option>
            <option value="GMT 0.0">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
            <option value="GMT +1.0">(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris</option>
            <option value="GMT +2.0">(GMT +2:00) Kaliningrad, South Africa</option>
            <option value="GMT +3.0">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
            <option value="GMT +3.5">(GMT +3:30) Tehran</option>
            <option value="GMT +4.0">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
            <option value="GMT +4.5">(GMT +4:30) Kabul</option>
            <option value="GMT +5.0">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
            <option value="GMT +5.5">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
            <option value="GMT +5.75">(GMT +5:45) Kathmandu</option>
            <option value="GMT +6.0">(GMT +6:00) Almaty, Dhaka, Colombo</option>
            <option value="GMT +7.0">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
            <option value="GMT +8.0">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
            <option value="GMT +9.0">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
            <option value="GMT +9.5">(GMT +9:30) Adelaide, Darwin</option>
            <option value="GMT +10.0">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
            <option value="GMT +11.0">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
            <option value="GMT +12.0">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
          </select>
        </MediaQuery>
      </div>
    );
  }

  renderRequest() {
    return (
      <div>
        <h1>Schedule a Call</h1>
        <form>
          <p className="pull-center">
            Call us anytime at <strong>+1 888-381-3332 ext: 1</strong> or pick a time and we'll call you back!
          </p>
          <h3>Contact Information</h3>
          <div className="format">
            <p>
              Name: <input className="text-input" type="text" id="name" name="name" />
            </p>
            <p>
              Email: <input className="text-input" type="email" id="email" name="email" autoComplete="email" />
            </p>
            <p>
              Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" />
            </p>
            <p>
              Company: <input className="text-input" id="company" name="company" autoComplete="company" />
            </p>
            <p>
              City: <input className="text-input" name="ship-city" id="city" autoComplete="shipping address-level2" />
            </p>
            <p>
              Country: <input className="text-input" name="ship-country" id="country" autoComplete="shipping country" />
            </p>
          </div>
          <h3>Pick a Date & Time</h3>
          <p>Choose an upcoming date and time that meets your schedule. </p>
          <div className="wrapper">
            <p>Time:</p>
            <select className="time-select" id="time" name="time">
              <option value="">Please Select...</option>
              <option value="morning">Morning (9 am to 12 pm)</option>
              <option value="afternoon">Afternoon (1 am to 5 pm)</option>
              <option value="evening">Evening (6 pm to 8 pm)</option>
            </select>
          </div>
          <div className="wrapper">
            <p>Timezone:</p>
            {this.renderTimeZone()}
          </div>
          <div className="date-wrapper">
            <DatePicker
              inline
              minDate={moment().add(1, "days")}
              maxDate={moment().add(3, "weeks")}
              filterDate={this.isWeekday}
              selected={this.state.highlightedDay}
              onChange={this.handleChange}
            />
          </div>
          <h3>Extra Information</h3>
          <p>Is there anything you want to let us know?</p>
          <textarea placeholder="(Optional)" id="additional-item" />
        </form>
        {this.state.missingFields ? <p className="missing">Please fill out all of the form fields!</p> : null}
        {this.state.invalidEmail ? <p className="missing">Please enter a valid email!</p> : null}
        <div className="button-wrapper">
          <Button label="Schedule" color="dark" onClick={this.sendRequest.bind(this)} />
          <Button
            label="Call Now"
            color="dark"
            url="http://acctmgr.evoice.com/AcctMgr/ClickToCall/ClickToConnectSession.aspx?key=565c30ac-2251-42c0-8ab2-f6be671472a6"
          />
        </div>
      </div>
    );
  }

  renderStatus() {
    switch (this.state.status) {
      case status.ready:
        return this.renderRequest();
      case status.sending:
        return this.renderSending();
      case status.failed:
        return this.renderFailed();
      default:
        console.error("Unknown status in call");
    }
  }

  render() {
    return (
      <div className="request-wrapper">
        <div className="request">{this.renderStatus()}</div>
      </div>
    );
  }
}
