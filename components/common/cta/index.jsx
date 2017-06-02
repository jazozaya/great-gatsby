import React from 'react'
import Button from 'components/common/button'

import './cta.scss'

export default class CallToAction extends React.Component {

  render() {

    const { title, subtitle, label, url } = this.props;

    return (<div className="cta">
    <div className="cta-wrapper">
      <div className="title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <Button label={label} url={url} internal color="dark"/>
    </div>
  </div>);
}
}
