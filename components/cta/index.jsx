import React from 'react'

import Title from './title'
import Button from './button'

export default class CallToAction extends React.Component {

  render() {

    const { title, subtitle, label, url } = this.props;

    return (<div className="cta">
      <div className="cta-wrapper">
        <Title title={title} subtitle={subtitle}/>
        <Button label={label} url={url}/>
      </div>
  </div>);
  }
}
