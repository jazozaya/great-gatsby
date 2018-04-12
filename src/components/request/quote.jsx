import React from 'react'
import { Redirect } from 'react-router'
import Button from 'components/common/button'
import SpinnerLoader from 'components/common/spinnerLoader'

import './common.scss'

const status = {
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
  "company",
  "street",
  "city",
  "state",
  "postal",
  "country",
];


const companyProfileLeft = {
  academia: ['profile-academia', "Academia / Education"],
  research: ['profile-research', "Research Institute"],
  engineering: ['profile-engineering', "Engineering Design / Consulting"],
  manufacturing: ['profile-manufacturing', "Manufacturing"],
  reseller: ['profile-reseller', "Reseller / Purchasing Agency"],
}

const companyProfileRight = {
  personal: ['profile-personal', "Personal Use"],
  fabLab: ['profile-fablab', "Fab Lab"],
  tools: ['profile-tools', "Tools & Machines"],
  incubator: ['profile-incubator', "Incubator / Accelerator"],
}

const industrySegmentLeft = {
  automotive: ['industry-automotive', "Automotive"],
  aerospace: ['industry-aerospace', "Aerospace / Defense"],
  pharma: ['industry-pharma', "Pharma / Medtech"],
  consumer: ['industry-consumer', "Consumer Electronics"],
  sport: ['industry-sport', "Sport / Wellness"],
}
const industrySegmentRight = {
  education: ['industry-education', "Education"],
  energy: ['industry-energy', "Energy / Environment"],
  mining: ['industry-mining', "Mining / Oil & Gas"],
  transportation: ['industry-transportation', "Transportation"],
}

export default class QuoteRequest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: status.ready,
      missingFields: false,
      otherProfile: false,
      otherIndustry: false,
      count: 0,
    };
  }


  extractCompanyProfile() {

    let profile = ''
    profile += document.getElementById(companyProfileLeft.academia[0]).checked ? `${companyProfileLeft.academia[1]}, ` : ""
    profile += document.getElementById(companyProfileLeft.research[0]).checked ? `${companyProfileLeft.research[1]}, ` : ""
    profile += document.getElementById(companyProfileLeft.engineering[0]).checked ? `${companyProfileLeft.engineering[1]}, ` : ""
    profile += document.getElementById(companyProfileLeft.manufacturing[0]).checked ? `${companyProfileLeft.manufacturing[1]}, ` : ""
    profile += document.getElementById(companyProfileLeft.reseller[0]).checked ? `${companyProfileLeft.reseller[1]}, ` : ""
    profile += document.getElementById(companyProfileRight.personal[0]).checked ? `${companyProfileRight.personal[1]}, ` : ""
    profile += document.getElementById(companyProfileRight.fabLab[0]).checked ? `${companyProfileRight.fabLab[1]}, ` : ""
    profile += document.getElementById(companyProfileRight.tools[0]).checked ? `${companyProfileRight.tools[1]}, ` : ""
    profile += document.getElementById(companyProfileRight.incubator[0]).checked ? `${companyProfileRight.incubator[1]}, ` : ""
    profile += document.getElementById('other-profile').checked ? document.getElementById('profile-other-answer').value : ""
    return profile
  }

  extractIndustrySegment() {

    let industry = ''
    industry += document.getElementById(industrySegmentLeft.automotive[0]).checked ? `${industrySegmentLeft.automotive[1]}, ` : ""
    industry += document.getElementById(industrySegmentLeft.aerospace[0]).checked ? `${industrySegmentLeft.aerospace[1]}, ` : ""
    industry += document.getElementById(industrySegmentLeft.pharma[0]).checked ? `${industrySegmentLeft.pharma[1]}, ` : ""
    industry += document.getElementById(industrySegmentLeft.consumer[0]).checked ? `${industrySegmentLeft.consumer[1]}, ` : ""
    industry += document.getElementById(industrySegmentLeft.sport[0]).checked ? `${industrySegmentLeft.sport[1]}, ` : ""
    industry += document.getElementById(industrySegmentRight.education[0]).checked ? `${industrySegmentRight.education[1]}, ` : ""
    industry += document.getElementById(industrySegmentRight.energy[0]).checked ? `${industrySegmentRight.energy[1]}, ` : ""
    industry += document.getElementById(industrySegmentRight.mining[0]).checked ? `${industrySegmentRight.mining[1]}, ` : ""
    industry += document.getElementById(industrySegmentRight.transportation[0]).checked ? `${industrySegmentRight.transportation[1]}, ` : ""
    industry += document.getElementById('other-industry').checked ? document.getElementById('industry-other-answer').value : ""
    return industry
  }

  extractSearchState() {
    let searchState = ''
    if (document.getElementById('learning').checked) {
      searchState = "Learning - Expanding my knowledge"
    }
    if (document.getElementById('searching').checked) {
      searchState = "Searching - Investigating technologies for my application"
    }
    if (document.getElementById('investing').checked) {
      searchState = "Investing - Buying within 1 year"
    }
    if (document.getElementById('purchasing').checked) {
      searchState = "Purchasing - Actively in the buying process"
    }
    return searchState;
  }

  sendRequest() {

    // Performs some data validation to make sure everything was filled in.
    const allComplete = requiredFields.every(field => document.getElementById(field).value.length > 0);

    let profile = this.extractCompanyProfile();
    let segment = this.extractIndustrySegment();
    let searchState = this.extractSearchState();

    if(!allComplete || !profile || !segment || !searchState){
      this.setState( { missingFields: true, count: this.state.count + 1 });
      return;
    }

    const emailParams = {

      timestamp: Date(),
      to_email: process.env.NODE_ENV === 'production' ? 'forms@voltera.io' : 'jesus@voltera.io',
      reply_to: document.getElementById('email').value,
      email: document.getElementById('email').value,
      first_name: document.getElementById('fname').value,
      last_name: document.getElementById('lname').value,
      phone: document.getElementById('phone').value,
      title: document.getElementById('title').value,
      company: document.getElementById('company').value,
      street: document.getElementById('street').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      postal: document.getElementById('postal').value,
      country: document.getElementById('country').value,
      company_profile: profile,
      industry_segment: segment,
      search_state: searchState,
      additional_comment: document.getElementById('additional-comment').value
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

  renderCheckbox(type, index) {
    return(
      <div key={index}>
        <input type="checkbox" id={type[0]}></input>
        <label htmlFor={type[0]}>{type[1]}</label>
      </div>
    )
  }

  renderRequest() {
    return (
      <div>
        <h1>Request a quote.</h1>
        <form>
          <h3>Contact Information</h3>
          <div className="format">
            <p>First Name: <input className="text-input" type="text" id="fname" name="name" /></p>
            <p>Last Name: <input className="text-input" type="text" id="lname" name="name" /></p>
            <p>Work Email: <input className="text-input" type="email"  id="email" name="email"  autoComplete="email" /></p>
            <p>Job Title: <input className="text-input" id="title" name="title" autoComplete="title" /></p>
            <p>Phone: <input className="text-input" type="tel" id="phone" name="phone" autoComplete="tel" /></p>
            <p>Company: <input className="text-input" id="company" name="company" autoComplete="organization" /></p>
          </div>
          <h3>Shipping Information</h3>
          <div className="wrapper">
            <p className="wide-text">Street: </p>
            <input className="wide-select" name="ship-address"  id="street"  autoComplete="shipping street-address" />
          </div>
          <div className="format">
            <p>City: <input className="text-input" name="ship-city" id="city"  autoComplete="shipping address-level2" /></p>
            <p>State/Region: <input className="text-input" name="ship-state" id="state"  autoComplete="shipping address-level3" /></p>
            <p>Postal Code: <input className="text-input" name="ship-zip" id="postal"  autoComplete="shipping postal-code" /></p>
            <p>Country: <input className="text-input" name="ship-country" id="country"  autoComplete="shipping country" /></p>
          </div>
          <h3>Company Profile</h3>
          <p>Please select one or more</p>
          <div className="checkboxes">
            <div className="left-check">
              {Object.keys(companyProfileLeft).map((type, index ) => this.renderCheckbox(companyProfileLeft[type], index))}
            </div>
            <div className="right-check">
              {Object.keys(companyProfileRight).map((type, index ) => this.renderCheckbox(companyProfileRight[type], index))}
              <div>
                <input type="checkbox" id="other-profile" onClick={() => this.setState({otherProfile: !this.state.otherProfile})}></input>
                <label htmlFor="other-profile">Other</label>
              </div>
            </div>
          </div>
          {this.renderOtherProfile()}
          <h3>Industry Segment</h3>
          <p>Please select one or more</p>
          <div className="checkboxes">
            <div className="left-check">
              {Object.keys(industrySegmentLeft).map((type, index ) => this.renderCheckbox(industrySegmentLeft[type], index))}
            </div>
            <div className="right-check">
              {Object.keys(industrySegmentRight).map((type, index ) => this.renderCheckbox(industrySegmentRight[type], index))}
              <div>
                <input type="checkbox" id="other-industry" onClick={() => this.setState({otherIndustry: !this.state.otherIndustry})}></input>
                <label htmlFor="other-industry">Other</label>
              </div>
            </div>
          </div>
          {this.renderOtherIndustry()}
          <p>What best describes your current situation?</p>
          <div className="left-check">
            <input type="radio" name="search-state" value="learning" id="learning"/> <label htmlFor="learning"><strong>Learning</strong> - Expanding my knowledge</label><br/>
            <input type="radio" name="search-state" value="searching" id="searching"/> <label htmlFor="searching"><strong>Searching</strong> - Investigating technologies for my application</label><br/>
            <input type="radio" name="search-state" value="investing" id="investing"/> <label htmlFor="investing"><strong>Investing</strong> - Buying within 1 year</label><br/>
            <input type="radio" name="search-state" value="purchasing" id="purchasing"/> <label htmlFor="purchasing"><strong>Purchasing</strong> - Actively in the buying process</label><br/>
          </div>
          <h3>Extra Information</h3>
          <p>Is there anything you want to tell us?</p>
          <textarea  placeholder="(Optional)" id="additional-comment"/>
        </form>
        {this.state.missingFields ? <p className="missing">Please complete all the fields! ({this.state.count})</p> : null}
        <div className="button-wrapper">
          <Button label="Submit" color="dark" onClick={this.sendRequest.bind(this)}/>
        </div>
      </div>
    );
  }

  renderOtherProfile() {
    if (this.state.otherProfile){
      return(
        <div>
          <p>Please describe your company profile:</p>
          <textarea id="profile-other-answer"/>
        </div>
      )
    }
  }

  renderOtherIndustry() {
    if (this.state.otherIndustry){
      return(
        <div>
          <p>Please describe your industry segment:</p>
          <textarea id="industry-other-answer"/>
        </div>
      )
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
      <div className="request-wrapper">
        <div className="request">
          {this.renderStatus()}
        </div>
      </div>);
    }
  }
