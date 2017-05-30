import React from 'react'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'
import Specs from 'components/specs'
import CallToAction from 'components/common/cta';

export default class Spec extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Specs />
        <CallToAction
            title="Want to share with your colleagues?"
            subtitle="Download our technical datasheet"
            label="Download"
            url="/assets/docs/V-One-Summary.pdf"
          />
      </div>
    )
  }
}
