import React from "react";
import MediaQuery from "react-responsive";

import Desktop from "./desktop";
import Mobile from "./mobile";

import { mobileThreshold } from "./../../../constants";

export default class Header extends React.Component {
  render() {
    return (
      <MediaQuery maxWidth={mobileThreshold}>
        {matches => {
          return matches ? <Mobile pageName={this.props.pageName} /> : <Desktop pageName={this.props.pageName} />;
        }}
      </MediaQuery>
    );
  }
}
