import React from 'react'
import Button from 'components/common/button'
import SVGInline from 'react-svg-inline';

const iconSvg = require('!raw-loader!./icons/experiment.min.svg');

export default class Benefit extends React.Component {

  render() {
    return (
      <div className="benefit-teaser">
        <SVGInline svg={iconSvg} />
        <h2>Experiment with ease.</h2>
        <div className="description">
          <p>What if you want to dispense your own inks? No problem. This is a robust tool and <strong>most inks work right out of the box</strong> with little or no modifications.</p>
        </div>
        <div className="button-wrap">
          <Button label="Learn More" internal url="/benefits/experiment/" color="dark"/>
        </div>
      </div>);
    }
  }
