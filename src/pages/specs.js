import React from 'react'
import Helmet from 'react-helmet'
import Specs from 'components/common/specs'
import CallToAction from 'components/common/cta';

export default class Spec extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Technical Specifications</title>
          <meta name="description" content="Learn about the technical specifications of the V-One platform. From the minimum resolution to the type of soldering alloys we use." />
        </Helmet>
        <Specs />
        <CallToAction
          title="Want to share with your colleagues?"
          subtitle="Download our technical datasheet"
          buttonOne={
            {
            label: "Download",
            url: "/docs/V-One-Summary.pdf",
            internal: false
            }
          }
          />
      </div>
    )
  }
}
