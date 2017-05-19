import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

export default class Something extends React.Component {

  render() {
    return (
      <div>
        <h2>It's Something Else</h2>
        <Collapse>
          <Panel header="What is your warranty policy?">
            We offer a 6 month warranty from date of delivery.  More information can be found here.
          </Panel>
          <Panel header="Do you offer bulk discounts?">
            Yes. Contact <strong>sales@voltera.io</strong>.
          </Panel>
          <Panel header="I'd like to be a reseller for Voltera.  Who do I contact?">
            We're not working with any resellers or distributors for the V-One at the moment. However, if you send an email to sales@voltera.io with your name, company, and contact information, we will reach out when we are ready to move forward.
          </Panel>
          <Panel header="What happens if I power my unit up in a different country? ">
            Check the product label on the back of your unit. If you use a 200-240 VAC unit in a country that supplies 100-120 VAC, then your heater will take twice as long to reach operating temperature because it is receiving half the power it needs.  If you use a 100-120 VAC unit in a country that supplies 200-240 VAC unit it will receive double the power it requires and will damage the printer to the point of no repair!
          </Panel>
        </Collapse>
      </div>);
    }
  }
