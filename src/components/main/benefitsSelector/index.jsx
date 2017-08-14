import React from 'react';

import './benefits.scss';

import Button from 'components/common/button'

import experimentIcon from './experiment.min.svg';
import platformIcon from './platform.min.svg';


export default class BenefitsSelector extends React.Component {

  render() {
    return (
        <div className="flex-row benefits-wrapper">
          <div className="benefits">
            <img src={platformIcon} />
            <h2>Dev Kit Support!</h2>
            <p>Get started quickly with development platforms like the <strong>Arduino® Uno</strong> and <strong>Raspberry Pi™ B+</strong>. Take your breadboard projects to the next level with your own personal shields.</p>
            <div className="button-wrap">
              <Button label="Learn More" internal url="/product/print/" color="dark"/>
            </div>
          </div>

          <div className="benefits">
            <img src={experimentIcon} />
            <h2>Experiment with ease.</h2>
            <p>What if you want to dispense your own inks? No problem. This is a robust tool and <strong>most inks work right out of the box</strong> with little or no modifications.</p>
            <div className="button-wrap">
              <Button label="Learn More" internal url="/product/experiment/" color="dark"/>
            </div>
          </div>
        </div>
    );
  }
}
