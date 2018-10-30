import React from "react";

import "./question.scss";

export default class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswer: false
    };
  }

  render() {
    const { title, underline } = this.props;

    const arrowClass = this.state.showAnswer ? "arrow-down" : "arrow-right";
    const questionClass = underline ? "faq-underline" : null;
    return (
      <div className={questionClass}>
        <p className="faq-question-title" onClick={() => this.setState({ showAnswer: !this.state.showAnswer })}>
          <i className={arrowClass} />
          {title}
        </p>
        {this.state.showAnswer ? this.props.children : null}
      </div>
    );
  }
}
