import React from 'react'
import './helpMe.scss'

import timeIcon from './save-time.svg'
import moneyIcon from './money-bags.svg'
import ecoIcon from './eco-friendly.svg'

class Reason extends React.Component {

  render() {
    const { iconSrc, title } = this.props;
    return (
      <div className="reason">
        <img className="icon" src={iconSrc} alt=""/>
        <h3>{title}</h3>
        <div className="description">
          {this.props.children}
        </div>
      </div>
    );
  }

}

export default class HelpMe extends React.Component {

  render() {
    return (
      <section className="help-me-wrapper">
        <h2>I design electronics. How does this help me?</h2>
        <div className="flex-row help-me">
          <Reason iconSrc={timeIcon} title="Design at your own pace">
            <p>You don't need to contact a factory across the world to get a few boards made.</p>
            <p>It's easy, just load your files and click print. No lead time, no stencils, no hassle.</p>
          </Reason>
          <Reason iconSrc={moneyIcon} title="Reduce the cost of a mistake">
            <p>Have you ever waited weeks for a board to arrive only to find out you made a mistake?</p>
            <p>The V-One prototypes your ideas immediately and at low risk from the comfort of your desk.</p>
          </Reason>
          <Reason iconSrc={ecoIcon} title="No nasty chemicals">
            <p>Stop using toxic and corrosive chemicals that cannot be flushed down the toilet.</p>
            <p>We use a completely additive approach and only deposit material exactly where we need it.</p>
          </Reason>
        </div>
      </section>
    );
  }
}

// <Reason iconSrc={timeIcon} title="Quick turn factory at your desk.">
//   <p>There is no need to send out your designs to get a few boards made.</p>
//   <p>Just load your design and click print. No stencils, no lead time, no hassle.</p>
// </Reason>
