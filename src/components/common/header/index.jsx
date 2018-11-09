import React from "react";

import Desktop from "./desktop";
import Mobile from "./mobile";

import { isMobile } from "./../../../constants";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: true
    };
  }

  componentDidMount() {
    this.setState({ isMobile: isMobile()});
  }
  render() {
    return this.state.isMobile ? <Mobile pageName={this.props.pageName} /> : <Desktop pageName={this.props.pageName} />;
  }
}
