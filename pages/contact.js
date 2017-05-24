import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import DummyHeader from 'components/common/dummyHeader'

import Contact from 'components/contact'

export default class Conctact extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <Contact />
      </div>
    )
  }
}
