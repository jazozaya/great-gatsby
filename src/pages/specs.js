import React from 'react'
import Helmet from 'react-helmet'
import Specs from 'components/product/specs'
import CallToAction from 'components/common/cta';

export default class Spec extends React.Component {

  render() {
    return (
      <div>
        <Specs />
        <CallToAction
            title="Want to share with your colleagues?"
            subtitle="Download our technical datasheet"
            label="Download"
            internal={false}
            url="/docs/V-One-Summary.pdf"
          />
      </div>
    )
  }
}
