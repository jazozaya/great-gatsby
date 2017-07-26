import React from 'react'
import Button from 'components/common/button'
import SVGInline from 'react-svg-inline';


const iconSvg = require('!raw-loader!./icons/platform.min.svg');

export default class Feature extends React.Component {

  render() {

    return (<div className="benefit-teaser">
    <SVGInline svg={iconSvg} />
    <h2>Dev Kit Support!</h2>
    <div className="description">
      <p>Get started quickly with development platforms like the <strong>Arduino® Uno</strong> and <strong>Raspberry Pi™ B+</strong>. Take your breadboard projects to the next level with your own personal shields.</p>
    </div>
    <div className="button-wrap">
      <Button label="Learn More" internal url="/benefits/platform/" color="dark"/>
    </div>
  </div>);
}
}
