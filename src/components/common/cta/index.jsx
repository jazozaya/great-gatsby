import React from 'react'
import Button from 'components/common/button'

import './cta.scss'

export default class CallToAction extends React.Component {

  render() {

    const { title, subtitle, label, url, internal } = this.props;

    return (<div className="cta-wrapper">
    <div className="cta flex-row center-wide">
      <div className="title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Button label={label} url={url} internal={internal} color="dark"/>
    </div>
  </div>);
}
}

CallToAction.defaultProps = {
  internal: true
}
