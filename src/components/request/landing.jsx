import React from "react";
import { navigate } from "gatsby";
import Button from "components/common/button";
import SpinnerLoader from "components/common/spinnerLoader";
import YouTube from "components/common/youtube";
import Specs from "components/common/specs";

import Industry from "./utils/industry";

import { validateEmail, extractCompanyProfile, extractIndustrySegment } from "./utils/api";

import "./common.scss";

const status = {
  ready: "ready",
  sending: "sending",
  failed: "failed"
};

const requiredFields = ["name", "email", "phone", "country"];

export default class LandingRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: status.ready,
      missingFields: false,
      invalidEmail: false
    };
  }

  sendRequest() {
    const { sourceDetails, landingType, thankYou } = this.props;

    // Performs some data validation to make sure everything was filled in.
    const allComplete = requiredFields.every(field => document.getElementById(field).value.length > 0);

    // Performs some data validation to make sure everything was filled in.
    let profile = extractCompanyProfile();
    let segment = extractIndustrySegment();

    // Ensure all data is complete.
    if (!allComplete || !profile || !segment) {
      this.setState({ invalidEmail: false, missingFields: true });
      return;
    }

    // Ensure the email we are getting is valid.
    if (!validateEmail(document.getElementById("email").value)) {
      this.setState({ invalidEmail: true, missingFields: false });
      return;
    }

    const emailParams = {
      // Information about the email:
      subject: landingType,
      timestamp: Date(),

      // Information about them.
      to_email: process.env.NODE_ENV === "production" ? "forms@voltera.io" : "jesus@voltera.io",
      reply_to: document.getElementById("email").value,
      from_name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      country: document.getElementById("country").value,

      // Information about their profile and industry
      company_profile: profile,
      industry_segment: segment,

      // Additional comments
      additional: document.getElementById("additional-comment").value,

      // Information about their source.
      utm_source: sourceDetails.utm_source,
      utm_medium: sourceDetails.utm_medium,
      utm_campaign: sourceDetails.utm_campaign,
      utm_term: sourceDetails.utm_term,
      utm_content: sourceDetails.utm_content
    };

    // Change state to sending.
    this.setState({ status: status.sending });
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm");
    window.emailjs
      .send("gmail", "quick_question", emailParams)
      .then(response => this.emailSuccess(response, thankYou), err => this.emailFailure(err));
  }

  emailSuccess(response, thankYou) {
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    navigate(`/request/thankyou/?${thankYou}`);
  }
  emailFailure(err) {
    console.log("FAILED. error=", err);
    this.setState({ status: status.failed });
  }

  renderSending() {
    return (
      <div>
        <p className="pull-center">We are processing your request.</p>
        <SpinnerLoader />
        <p className="pull-center">Thank you for filling out your information.</p>
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

  renderRequest() {
    return (
      <div>
        <h2>Want to know more?</h2>
        <form>
          <h3>Contact Information</h3>
          <div className="format">
            <p>
              Name: <input className="text-input" type="text" id="name" name="name" autoComplete="name" />
            </p>
            <p>
              Email: <input className="text-input" type="email" id="email" name="email" autoComplete="email" />
            </p>
            <p>
              Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" />
            </p>
            <p>
              Country: <input className="text-input" name="ship-country" id="country" autoComplete="shipping country" />
            </p>
          </div>
          <Industry />
          <h3>Extra Information</h3>
          <p>Is there anything you want to tell us?</p>
          <textarea placeholder="(Optional)" id="additional-comment" />
        </form>
        {this.state.missingFields ? <p className="missing">Please fill out of all of the required fields!</p> : null}
        {this.state.invalidEmail ? <p className="missing">Please enter a valid email!</p> : null}
        <div className="button-wrapper">
          <Button label="Submit" color="dark" onClick={this.sendRequest.bind(this)} />
        </div>
      </div>
    );
  }

  renderVideo() {
    const { videoId, thumbFluid } = this.props;
    if (typeof window !== "undefined") {
      var width = Math.min(window.innerWidth - 100, 600); // Trim in case of mobile.
      return <YouTube width={width} videoId={videoId} fluid={thumbFluid} />;
    }
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
        console.error("Unknown state in landing page");
    }
  }

  render() {
    const { description } = this.props;
    return (
      <div className="landing-wrapper">
        <div className="request">
          <h1>Hi there!</h1>
          <p className="pull-center">{description}</p>
          {this.renderVideo()}
          {this.renderStatus()}
        </div>
        <Specs />
      </div>
    );
  }
}
