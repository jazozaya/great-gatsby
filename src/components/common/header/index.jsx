import React from "react";

import Desktop from "./desktop";
import Mobile from "./mobile";

import Bowser from "bowser";

export default class Header extends React.Component {
  render() {
    return Bowser.mobile ? <Mobile pageName={this.props.pageName} /> : <Desktop pageName={this.props.pageName} />;
  }
}
