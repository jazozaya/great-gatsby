import React from 'react'
import Helmet from 'react-helmet'

import Print from 'components/product/print'

export default class MyPrint extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Printing circuit boards is easy</title>
          <meta name="description" content="The Voltera V-One uses an additive approach to create circuit boards. Ink is dispensed precisely where it is needed without any waste." />
        </Helmet>
        <Print />
      </div>
    )
  }
}
