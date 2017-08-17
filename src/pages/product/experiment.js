import React from 'react'
import Helmet from 'react-helmet'

import Experiment from 'components/product/experiment'

export default class MyExperiment extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Experiment with new materials</title>
          <meta name="description" content="Experiment with new fluids using the Voltera V-One platform. Print with your own materials onto the substrates you want." />
        </Helmet>
        <Experiment />
      </div>
    )
  }
}
