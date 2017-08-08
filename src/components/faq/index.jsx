import React from 'react'
import './faq.scss'

import TechnologyFAQ from './technology'
import PrintFAQ from './print'
import PasteFAQ from './paste'
import ShippingFAQ from './shipping'
import ExperimentFAQ from './experiment'
//import EducateFAQ from './educate'
import SomethingFAQ from './something'
import SoftwareFAQ from './software'

export default class FAQ extends React.Component {

  render() {
    return (
      <div className="faq-wrapper">
        <h1>F.A.Q.</h1>
        <p className="center-narrow pull-center">The section below contains the most common questions we have received. If you have a question that is not answered in this page, feel free to send us an email at <strong>sales@voltera.io</strong> or try clicking the <strong>'chat'</strong> button at the bottom of the page.</p>
        <TechnologyFAQ title="How does it work?" />
        <PrintFAQ title="Conductive ink and printing"/>
        <PasteFAQ title="Solder paste and reflow"/>
        <SoftwareFAQ title="Desktop software" />
        <ExperimentFAQ title="Experiment with the V-One" />
        <ShippingFAQ title="Shipping to my country" />
        <SomethingFAQ title="It's something else" />
      </div>
    );
  }
}
