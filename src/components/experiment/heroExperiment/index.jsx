import React from 'react'
import './heroExperiment.scss'
import Button from 'components/common/button'

export default class Hero extends React.Component {

  render() {
    return (<div className="hero-experiment">
      <div className="hero-experiment-wrapper">
        <h1>Leap into the future.</h1>
        <p>Experiment with new materials using<br /> the Voltera V-One platform.</p>
        <div className="buttons">
          <Button label="Buy Now" url="https://store.voltera.io/products/voltera-v-one" color="light" />
        </div>
      </div>
  </div>);
  }
}
