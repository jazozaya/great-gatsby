import React from "react"
import Helmet from "react-helmet"
import Footer from 'components/common/footer'
import Header from 'components/common/header'
import DummyHeader from 'components/common/dummyHeader'

import 'css/main.scss'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div>
        <Helmet
          title="Voltera | Build Hardware Faster"
          meta={[
            { name: "description", content: "Voltera V-One. Build Hardware Faster" },
            { name: "keywords", content: "sample, something" },
          ]}
          />
        <Header />
        <DummyHeader />
        {this.props.children()}
        <Footer />
      </div>
    )
  },
})
