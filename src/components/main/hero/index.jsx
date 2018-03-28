import React from 'react'
import './hero.scss'

import Button from 'components/common/button'
import Dots from 'components/common/dots'

export default class Hero extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      index: 1
    };

    // Save timer id so we clear it when we navigate away.
    const profile = parseInt(props.profile)
    this.state.index = profile ? profile : 1
    this.state.intervalId = setInterval(() => this.setState({index: (this.state.index + 1) % 3}), 6500*3)
    this.overrideSelection = this.overrideSelection.bind(this)
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  overrideSelection(newIndex) {

    // Clear current timer and start a new one.
    clearInterval(this.state.intervalId)
    const intervalId = setInterval(() => this.setState({index: (this.state.index + 1) % 3}), 6500)

    // Change the index.
    this.setState({intervalId: intervalId, index: newIndex})
  }

  renderVOne() {
    return (
      <div className="hero v-one">
        <div className="wrapper">
          <h1>Build hardware faster.</h1>
          <p>Prototype on your desktop with the<br />Voltera V-One PCB Printer.</p>
          <div className="buttons">
            <Button label="Buy Now - $3,998" url="/store/" internal color="light" />
            <Button label="Learn More" url="/product/technology/" internal color="clear" />
          </div>
        </div>
        <div className="dots-position">
          <Dots selected="0" total="3" callback={this.overrideSelection}/>
        </div>
      </div>
    );
  }

  renderDrill() {
    return (
      <div className="hero drill">
        <div className="wrapper">
          <h1>Meet the V-One Drill.</h1>
          <p>Create double sided circuit boards on your desk.</p>
          <br /><br /><br />
          <p>Limited Price!</p>
          <p><strong  className="green">$499 USD</strong> until <strong  className="green">March 31st</strong>!</p>
          <div className="buttons">
            <Button label="Buy Now" url="/store/#drill" internal color="light" />
            <Button label="Learn More" url="/product/drill/" internal color="clear" />
          </div>
        </div>

        <div className="dots-position">
          <Dots selected="1" total="3" callback={this.overrideSelection}/>
        </div>
      </div>
    );
  }


  renderExperiment() {
    return (
      <div className="hero dispensing">
        <div className="wrapper">
          <h1>Dispense any material.</h1>
          <p>An affordable dispensing system.</p>
          <div className="buttons">
            <Button label="Buy Now - $3,499" url="/store/" internal color="light" />
            <Button label="Learn More" url="/product/experiment/" internal color="clear" />
          </div>
        </div>
        <div className="dots-position">
          <Dots selected="2" total="3" callback={this.overrideSelection}/>
        </div>
      </div>
    );
  }

  render() {
    switch(this.state.index) {
      case 0:
      return this.renderVOne();
      case 1:
      return this.renderDrill();
      case 2:
      return this.renderExperiment()
      default:
      return this.renderDrill();
    }
  }
}
