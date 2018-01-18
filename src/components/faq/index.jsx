import React from 'react'
import './faq.scss'

import TechnologyFAQ from './technology'
import PrintFAQ from './print'
import PasteFAQ from './paste'
import ShippingFAQ from './shipping'
import ExperimentFAQ from './experiment'
import SomethingFAQ from './something'
import SoftwareFAQ from './software'
import DrillFAQ from './drill'

export default class FAQ extends React.Component {

  render() {
    return (
      <div className="faq-wrapper">
        <h1>F.A.Q.</h1>
        <p className="center-narrow pull-center caption">If you have a question that is not answered in this page, try clicking the <strong>'chat'</strong> button at the bottom of the page to talk to us.</p>
        <TechnologyFAQ title="How does it work?" />
        <PrintFAQ title="Conductive ink and printing"/>
        <PasteFAQ title="Solder paste and reflow"/>
        <SoftwareFAQ title="Desktop software" />
        <DrillFAQ title="V-One Drilling attachment"/>
        <ExperimentFAQ title="Experiment with the V-One" />
        <ShippingFAQ title="Shipping to my country" />
        <SomethingFAQ title="It's something else" />
      </div>
    );
  }
}
