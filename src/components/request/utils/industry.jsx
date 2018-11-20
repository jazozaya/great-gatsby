import React from "react";
import s from "./industry.module.scss";

import { companyProfileLeft, companyProfileRight, industrySegmentLeft, industrySegmentRight, otherData } from "./api";

export default class Industry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      otherProfile: false,
      otherIndustry: false,
    };
  }

  renderCheckbox(type, index) {
    return (
      <div key={index}>
        <input type="checkbox" id={type[0]} />
        <label htmlFor={type[0]}>{type[1]}</label>
      </div>
    );
  }

  renderOtherProfile() {
    if (this.state.otherProfile) {
      return (
        <div>
          <p>Please describe your company profile:</p>
          <textarea id={otherData.profileAnswer} />
        </div>
      );
    }
  }

  renderOtherIndustry() {
    if (this.state.otherIndustry) {
      return (
        <div>
          <p>Please describe your industry segment:</p>
          <textarea id={otherData.industryAnswer} />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h3>Company Profile</h3>
        <p>Please select one or more</p>
        <div className={s.checkboxes}>
          <div className="left-check">
            {Object.keys(companyProfileLeft).map((type, index) => this.renderCheckbox(companyProfileLeft[type], index))}
          </div>
          <div className="right-check">
            {Object.keys(companyProfileRight).map((type, index) => this.renderCheckbox(companyProfileRight[type], index))}
            <div>
              <input type="checkbox" id={otherData.profile} onClick={() => this.setState({ otherProfile: !this.state.otherProfile })} />
              <label htmlFor={otherData.profile}>Other</label>
            </div>
          </div>
        </div>
        {this.renderOtherProfile()}
        <h3>Industry Segment</h3>
        <p>Please select one or more</p>
        <div className={s.checkboxes}>
          <div className="left-check">
            {Object.keys(industrySegmentLeft).map((type, index) => this.renderCheckbox(industrySegmentLeft[type], index))}
          </div>
          <div className="right-check">
            {Object.keys(industrySegmentRight).map((type, index) => this.renderCheckbox(industrySegmentRight[type], index))}
            <div>
              <input type="checkbox" id={otherData.industry} onClick={() => this.setState({ otherIndustry: !this.state.otherIndustry })} />
              <label htmlFor={otherData.industry}>Other</label>
            </div>
          </div>
        </div>
        {this.renderOtherIndustry()}
      </div>
    );
  }
}
