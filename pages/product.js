import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

import Box from 'components/box'
import Cartridge from 'components/product/cartridge'
import Software from 'components/product/software'

export default class MyProduct extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Box />
        <Software />
      </div>
    )
  }
}
