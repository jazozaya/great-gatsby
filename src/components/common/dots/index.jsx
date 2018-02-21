import React from 'react'

import './dots.scss'

export default class Dots extends React.Component {

  renderDot(index, selected) {
    const { callback } = this.props
    if (index === selected) {
      return <div className="dot selected"></div>
    }
    return <div className="dot" onClick={() => callback(index)}></div>
  }

  // There must be a better way of doing this... but i'm feeling lazy.
  renderThree(selected) {
    return(
      <div className="dots">
        {this.renderDot(0, selected)}
        {this.renderDot(1, selected)}
        {this.renderDot(2, selected)}
      </div>
    );
  }

  renderFour(selected) {
    return(
      <div className="dots">
        {this.renderDot(0, selected)}
        {this.renderDot(1, selected)}
        {this.renderDot(2, selected)}
        {this.renderDot(3, selected)}
      </div>
    );
  }

  render() {
    const { selected, total } = this.props;

    switch (parseInt(total)) {
      case 3:
      return this.renderThree(parseInt(selected));
      break;
      case 4:
      return this.renderFour(parseInt(selected));
      break;
    }
  }
}
