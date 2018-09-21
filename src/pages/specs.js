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
          title="Share with your colleagues"
          subtitle="Download our feature summary."
          buttonOne={
            {
            label: "Download",
            url: "/pdfs/Voltera-Overview.pdf",
            internal: false
            }
          }
          />
      </div>
    )
  }
}
