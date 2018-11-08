import React from "react";

import Desktop from "./desktop";
import Mobile from "./mobile";

import { isMobile, isMobileStart } from "./../../../constants";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobileStart
    };

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({ isMobile: isMobile() });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    return this.state.isMobile ? <Mobile pageName={this.props.pageName} /> : <Desktop pageName={this.props.pageName} />;
  }
}
