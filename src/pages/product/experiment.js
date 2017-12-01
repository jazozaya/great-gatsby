import React from 'react'
import Helmet from 'react-helmet'

import Experiment from 'components/product/experiment'

export default class MyExperiment extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | A Dispensing System</title>
          <meta name="description" content="Experiment with new fluids using the Voltera V-One platform. Print with your own materials onto the substrates you want." />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <Experiment />
      </div>
    )
  }
}
