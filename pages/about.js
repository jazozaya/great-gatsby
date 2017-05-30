import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

import About from 'components/about'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <About />
      </div>
    )
  }
}
