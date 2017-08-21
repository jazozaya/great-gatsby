import React from 'react'
import Button from 'components/common/button'

import './cta.scss'

export default class CallToAction extends React.Component {

  render() {
    const { title, subtitle, buttonOne, buttonTwo } = this.props;

    return (
      <div className="cta-wrapper">
        <div className="cta flex-row center-wide">
          <div className="title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="buttons">
            <Button label={buttonOne.label} url={buttonOne.url} internal={buttonOne.internal} color="dark"/>
            <div className="spacer"></div>
            {buttonTwo ? <Button label={buttonTwo.label} url={buttonTwo.url} internal={buttonTwo.internal} color="dark"/> : null}
          </div>
        </div>
      </div>
    );
  }
}
