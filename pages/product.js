import React from 'react'
import Helmet from 'react-helmet'

import Box from 'components/box'
import Cartridge from 'components/product/cartridge'
import Software from 'components/product/software'
import Heater from 'components/product/heater'
import Specs from 'components/specs'

export default class MyProduct extends React.Component {

  render() {
    return (
      <div>
        <Heater />
        <Box />
        <Software />
        <Specs />
      </div>
    )
  }
}
