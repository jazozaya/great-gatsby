import React from "react";

import s from "./secret.module.scss";

import cond from "./cond1.png";

import exp from "./exp1.png";
import flex from "./flex1.png";

export default class Secret extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCond: false,
      showFlex: false,
      showExp: false
    };
  }
  renderFew(title, ink, cb) {
    return (
      <div className={s.column}>
        <h2>{title}</h2>
        <img src={ink} />
        <img src={ink} />
        <img src={ink} />
        <div onClick={cb} className={s.more}>
          More...
        </div>
      </div>
    );
  }

  renderMore(title, ink) {
    return (
      <div>
        <h2>{title}</h2>
        <div id={s.wrapperScroll} className={s.longColumn}>
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
          <img src={ink} />
        </div>
      </div>
    );
  }

  renderCond() {
    if (this.state.showCond) {
      return this.renderMore("Conductive Ink", cond);
    } else {
      return this.renderFew("Conductive Ink", cond, () => this.setState({ showCond: true }));
    }
  }

  renderFlex() {
    if (this.state.showFlex) {
      return this.renderMore("Flexible Ink", flex);
    } else {
      return this.renderFew("Flexible Ink", flex, () => this.setState({ showFlex: true }));
    }
  }

  renderExp() {
    if (this.state.showExp) {
      return this.renderMore("Experimental Ink", exp);
    } else {
      return this.renderFew("Experimental Ink", exp, () => this.setState({ showExp: true }));
    }
  }

  render() {
    return (
      <div className={s.background}>
        <div className={s.wrapper}>
          <h1>Choose your Ink</h1>
          <div className={s.columnWrapper}>
            {this.renderCond()}
            {this.renderFlex()}
            {this.renderExp()}
          </div>
        </div>
      </div>
    );
  }
}
