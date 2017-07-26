import React from 'react'
import YouTube from 'components/common/youtube'
import Button from 'components/common/button'
import SVGInline from 'react-svg-inline';


const iconSvg = require('!raw-loader!./icons/software.min.svg');

export default class Feature extends React.Component {

  render() {

    return (
      <div className="benefit-teaser">
        <SVGInline svg={iconSvg} />
        <h2>Software you love.</h2>
        <div className="description">
          <p>The software is designed to be understood. From importing your Gerber files to the moment you press print, the <strong>software walks you though each step</strong>.</p>
        </div>
        <div className="button-wrap">
          <Button label="Learn More" internal url="/benefits/software/" color="dark"/>
        </div>
      </div>);
    }
  }
