import React from 'react'
import Helmet from 'react-helmet'

import Paste from 'components/product/paste'

export default class MyPaste extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Solder Paste and Reflow</title>
          <meta name="description" content="Ditch the stencil and the soldering iron. Just mount your boards on the V-One and dispense paste in minutes." />
        </Helmet>
        <Paste />
      </div>
    )
  }
}
