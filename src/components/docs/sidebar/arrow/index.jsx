import React from "react";
import s from "./arrow.module.scss";

export default class Category extends React.Component {
  render() {
    return <span className={this.props.expand ? s.arrow + " " + s.down : s.arrow} />;
  }
}
