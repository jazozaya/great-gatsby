import React from 'react'
import Button from 'components/common/button'
import './feature.scss'

export default class Feature extends React.Component {

  render() {
    return (
      <div className="feature">
        <img src="/assets/selector/electronics-on-glass.jpg" />
        <div className="description">
          <h2>Use it for what you want.</h2>
          <p>What if you want to dispense your own inks? No problem. This is a robust tool and <strong>most inks work right out of the box</strong> with little or no modifications.</p>
          <p>What about different substrates? Rigid or flexible, metallic or ceramic - <strong>we can probably dispense on it.</strong></p>
          <div className="button-wrap">
            <Button label="Learn More" internal url="/features/experiment/" color="dark"/>
          </div>
        </div>
      </div>);
    }
  }
