import React from "react";

import { Link } from "gatsby";

import s from "./quickStart.module.scss";

export default class QuickStart extends React.Component {
  render() {
    const { icon, link } = this.props;

    return (
      <Link to={link} className={s.quick}>
        <img src={icon} alt="" />
        {this.props.children}
      </Link>
    );
  }
}
