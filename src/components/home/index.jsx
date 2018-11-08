import React from 'react'

import CallToAction from 'components/common/cta';
import Awards from 'components/common/awards'

import Hero from './hero'
import Testimonial from './testimonial'
import Teaser from './teaser'
import Summary from './summary'

import "css/main.scss"


export default class Index extends React.Component {

  render() {

    const buttonOne = {
      label: "Book a Call",
      url: "/request/call/",
      internal: true
    }

    const buttonTwo = {
      label: "Get A Quote",
      url: "/request/quote/",
      internal: true
    }

    return (
      <div>
        <Hero/>
        <Summary />
        <Teaser/>
        <Testimonial />
        <Awards />
        <CallToAction
          title="Want to get in touch?"
          subtitle="Let's find a time to talk!"
          buttonOne={buttonOne}
          buttonTwo={buttonTwo}
        />
      </div>
    )
  }
}
