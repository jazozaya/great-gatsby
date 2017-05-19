import React from 'react'
import './faq.scss'

import Functionality from './functionality'
import Inks from './inks'
import Shipping from './shipping'
import Experiment from './experiment'
import Educate from './educate'
import Something from './something'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;
export default class FAQ extends React.Component {

  render() {
    return (<div className="faq">
    <div className="faq-wrapper">
      <h1>FAQ</h1>
      <p>The section below contains the most common questions we have received. If you have a question that is not answered in this page, feel free to send us an email at <strong>sales@voltera.io</strong> or try clicking the 'chat' button at the bottom of the page.</p>
      <Functionality />
      <Inks />
      <Shipping />
      <Experiment />
      <Educate />
      <Something />
    </div>
  </div>);
}
}
