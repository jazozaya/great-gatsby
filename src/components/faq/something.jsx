import React from 'react'

import Question from './utils/question'
import Template from './utils/template'

import Link from 'gatsby-link'

export default class SomethingFAQ extends React.Component {

  render() {
    const { title, all, id } = this.props;
    return (
      <Template id={id} title={title} all={all}>
        <Question underline title="What is your warranty policy?">
          <p>We offer a 6 month warranty from date of delivery.  More information can be found in our <Link to="/docs/tos">Terms of Service</Link>.</p>
        </Question>
        <Question underline title="Do you offer bulk discounts?">
          <p>Yes. Contact <strong>sales@voltera.io</strong>.</p>
        </Question>
        <Question underline title="Do you provide education discounts?">
          <p>Yes! Since consumables can be used up quickly when many students are using the V-One, we offer a discount on our common consumable materials. Reach out to <strong>sales@voltera.io</strong> to find out more.</p>
        </Question>
        <Question underline title="Do you provide an electronics curriculum?">
          <p>We want to! If you have ideas or are able to help make this dream a reality, please contact <strong>hello@voltera.io</strong>.  Thank you!</p>
        </Question>
        <Question underline title="I'm an ink manufacturer. Can you help?">
          <p>We are always exploring new inks and partnerships. Please contact <strong>support@voltera.io</strong> with your contact information. Thank you!</p>
        </Question>
        <Question title="I'd like to be a reseller for Voltera.">
          <p>We love resellers! Please shoot us an email at <strong>sales@voltera.io</strong> with your name and company details. We will be in touch!</p>
        </Question>
      </Template>
    );
    }
  }
