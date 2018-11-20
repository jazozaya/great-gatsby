import React from "react";
import { navigate } from "gatsby";
import Button from "components/common/button";
import SpinnerLoader from "components/common/spinnerLoader";

import Industry from './utils/industry'

import { validateEmail, extractCompanyProfile, extractIndustrySegment } from './utils/api'

import "./common.scss";

const status = {
  pageOne: "pageOne",
  pageTwo: "pageTwo",
  pageThree: "pageThree",
  emailSending: "emailSending",
  emailFailed: "emailFailed"
};

const requiredFields = ["fname", "lname", "email", "phone", "company", "street", "city", "state", "postal", "country"];

export default class QuoteRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: status.pageOne,
      missingFields: false,
      invalidEmail: false,
    };
  }

  extractSearchState() {
    let searchState = "";
    if (document.getElementById("learning").checked) {
      searchState = "Learning - Expanding my knowledge";
    }
    if (document.getElementById("searching").checked) {
      searchState = "Searching - Investigating technologies for my application";
    }
    if (document.getElementById("investing").checked) {
      searchState = "Investing - Buying within 1 year";
    }
    if (document.getElementById("purchasing").checked) {
      searchState = "Purchasing - Actively in the buying process";
    }
    return searchState;
  }

  pageOneValidate() {
    const allComplete = requiredFields.every(field => document.getElementById(field).value.length > 0);

    if (!allComplete) {
      this.setState({ invalidEmail: false, missingFields: true });
      return;
    }

    // Ensure the email we are getting is valid. 
    if (!validateEmail(document.getElementById("email").value)) {
      this.setState({ invalidEmail: true, missingFields: false });
      return;
    }

    // Capture the p
    var emailParams = {
      timestamp: Date(),
      to_email: process.env.NODE_ENV === "production" ? "forms@voltera.io" : "jesus@voltera.io",
      reply_to: document.getElementById("email").value,
      email: document.getElementById("email").value,
      first_name: document.getElementById("fname").value,
      last_name: document.getElementById("lname").value,
      phone: document.getElementById("phone").value,
      title: document.getElementById("title").value,
      company: document.getElementById("company").value,
      street: document.getElementById("street").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      postal: document.getElementById("postal").value,
      country: document.getElementById("country").value
    };

    this.setState({
      status: status.pageTwo,
      emailParams: emailParams,
      missingFields: false
    });
  }

  missingFields() {
    if (this.state.missingFields) {
      return <p className="missing">Please complete all the fields!</p>
    }
  }

  pageTwoValidate() {
    // Performs some data validation to make sure everything was filled in.
    let profile = extractCompanyProfile();
    let segment = extractIndustrySegment();

    if (!profile || !segment) {
      this.setState({ missingFields: true });
      return;
    }

    var emailParams = this.state.emailParams;
    emailParams.company_profile = profile;
    emailParams.industry_segment = segment;

    this.setState({
      status: status.pageThree,
      emailParams: emailParams,
      missingFields: false
    });
  }

  pageThreeValidate() {
    // Performs some data validation to make sure everything was filled in.
    let searchState = this.extractSearchState();
    let hearAboutUs = document.getElementById("hear-about-us").value;

    if (!searchState || hearAboutUs.length === 0) {
      this.setState({ missingFields: true });
      return;
    }

    var emailParams = this.state.emailParams;
    emailParams.search_state = searchState;
    emailParams.hear_about_us = hearAboutUs;
    emailParams.additional_comment = document.getElementById("additional-comment").value;

    // Lastly - get the referrer
    emailParams.referrer = document.referrer ? document.referrer : "Unknown"

    // Change state to sending.
    this.setState({ status: status.emailSending });
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm");
    window.emailjs.send("gmail", "quote_request", emailParams).then(response => this.emailSuccess(response), err => this.emailFailure(err));
  }

  emailSuccess(response) {
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    navigate("/request/thankyou/?q=RFQ");
  }
  emailFailure(err) {
    console.log("FAILED. error=", err);
    this.setState({ status: status.emailFailed });
  }

  renderEmailSending() {
    return (
      <div>
        <p className="pull-center">We are processing your request.</p>
        <SpinnerLoader />
        <p className="pull-center">Thank you for filling out your information.</p>
      </div>
    );
  }

  renderEmailFailed() {
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

  renderProgressIndicator(index) {
    return (
      <div className="circle-wrapper">
        <div className="circle filled" />
        <div className="slit" />
        <div className={index > 0 ? "circle filled" : "circle"} />
        <div className="slit" />
        <div className={index > 1 ? "circle filled" : "circle"} />
      </div>
    );
  }

  // PAGE ONE //
  renderPageOne() {
    return (
      <div>
        {this.renderProgressIndicator(0)}
        <form>
          <h3>Contact Information</h3>
          <div className="format">
            <p>
              First Name: <input className="text-input" type="text" id="fname" name="name" />
            </p>
            <p>
              Last Name: <input className="text-input" type="text" id="lname" name="name" />
            </p>
            <p>
              Work Email: <input className="text-input" type="email" id="email" name="email" autoComplete="email" />
            </p>
            <p>
              Job Title: <input className="text-input" id="title" name="title" autoComplete="title" />
            </p>
            <p>
              Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" />
            </p>
            <p>
              Company: <input className="text-input" id="company" name="company" autoComplete="organization" />
            </p>
          </div>
          <h3>Shipping Information</h3>
          <div className="wrapper">
            <p className="wide-text">Street: </p>
            <input className="wide-select" name="ship-address" id="street" autoComplete="shipping street-address" />
          </div>
          <div className="format">
            <p>
              City: <input className="text-input" name="ship-city" id="city" autoComplete="shipping locality" />
            </p>
            <p>
              State/Region: <input className="text-input" name="ship-state" id="state" autoComplete="shipping region" />
            </p>
            <p>
              Postal Code: <input className="text-input" name="ship-zip" id="postal" autoComplete="shipping postal-code" />
            </p>
            <p>
              Country: <input className="text-input" name="ship-country" id="country" autoComplete="shipping country" />
            </p>
          </div>
        </form>
        {this.missingFields()}
        {this.state.invalidEmail ? <p className="missing">Please enter a valid email!</p> : null}
        <div className="button-wrapper">
          <Button label="Next" color="dark" onClick={this.pageOneValidate.bind(this)} />
        </div>
      </div>
    );
  }

  // PAGE TWO AND  HELPER FUNCTIONS //
  renderPageTwo() {
    return (
      <div>
        {this.renderProgressIndicator(1)}
        <form>
          <Industry />
        </form>
        {this.missingFields()}
        <div className="button-wrapper">
          <Button label="Next" color="dark" onClick={this.pageTwoValidate.bind(this)} />
        </div>
      </div>
    );
  }

  // PAGE THREE //
  renderPageThree() {
    return (
      <div>
        {this.renderProgressIndicator(2)}
        <form>
          <h3>Extra Information</h3>
          <p>What best describes your current situation?</p>
          <div className="left-check">
            <input type="radio" name="search-state" value="learning" id="learning" />{" "}
            <label htmlFor="learning">
              <strong>Learning</strong> - Expanding my knowledge
            </label>
            <br />
            <input type="radio" name="search-state" value="searching" id="searching" />{" "}
            <label htmlFor="searching">
              <strong>Searching</strong> - Investigating technologies for my application
            </label>
            <br />
            <input type="radio" name="search-state" value="investing" id="investing" />{" "}
            <label htmlFor="investing">
              <strong>Investing</strong> - Buying within 1 year
            </label>
            <br />
            <input type="radio" name="search-state" value="purchasing" id="purchasing" />{" "}
            <label htmlFor="purchasing">
              <strong>Purchasing</strong> - Actively in the buying process
            </label>
            <br />
          </div>
          <p>How did you find out about the V-One?</p>
          <textarea placeholder="Tradeshow, Social Media, Online Ads, Word of Mouth, etc..." id="hear-about-us" />
          <p>Is there anything you want to tell us?</p>
          <textarea placeholder="(Optional)" id="additional-comment" />
        </form>
        {this.missingFields()}
        <div className="button-wrapper">
          <Button label="Submit" color="dark" onClick={this.pageThreeValidate.bind(this)} />
        </div>
      </div>
    );
  }

  renderStatus() {
    switch (this.state.status) {
      case status.pageOne:
        return this.renderPageOne();
      case status.pageTwo:
        return this.renderPageTwo();
      case status.pageThree:
        return this.renderPageThree();
      case status.emailSending:
        return this.renderEmailSending();
      case status.emailFailed:
        return this.renderEmailFailed();
      default:
        console.error("Unknown Status in quote");
    }
  }

  render() {
    return (
      <div className="request-wrapper">
        <div className="request">
          <h1>Request a quote.</h1>
          <p className="pull-center">
            Get in touch! Call us anytime at <strong>+1 888-381-3332 ext: 1</strong>
          </p>
          {this.renderStatus()}
        </div>
      </div>
    );
  }
}
