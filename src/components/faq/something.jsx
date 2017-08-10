import React from 'react'
import Link from 'components/common/linkWrapper'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

import Template from './template'

export default class SomethingFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Collapse>
          <Panel header="What is your warranty policy?">
            <p>We offer a 6 month warranty from date of delivery.  More information can be found in our <Link to="/docs/tos">Terms of Service</Link>.</p>
          </Panel>
          <Panel header="Do you offer bulk discounts?">
            <p>Yes. Contact <strong>sales@voltera.io</strong>.</p>
          </Panel>
          <Panel header="Do you provide education discounts?">
            Yes! Since consumables can be used up quickly when many students are using the V-One, we offer a discount on our common consumable materials. Reach out to <strong>sales@voltera.io</strong> to find out more.
          </Panel>
          <Panel header="Do you provide an electronics curriculum?">
            <p>We want to! If you have ideas or are able to help make this dream a reality, please contact <strong>hello@voltera.io</strong>.  Thank you!</p>
          </Panel>
          <Panel header="I'm an ink manufacturer. Can you help?">
            <p>We are always exploring new inks and partnerships. Please contact <strong>support@voltera.io</strong> with your contact information. Thank you!</p>
          </Panel>
          <Panel header="I'd like to be a reseller for Voltera.">
            <p>We love resellers! Please shoot us an email at <strong>sales@voltera.io</strong> with your name and company details. We will be in touch!</p>
          </Panel>
        </Collapse>
      </Template>
    );
    }
  }
