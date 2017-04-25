import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import Helmet from "react-helmet"
import { config } from "config"
import Footer from 'components/common/footer'
import Header from 'components/common/header'

import 'css/main.scss'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    return (
      <div className="container">
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Voltera V-One. Build Hardware Faster" },
            { name: "keywords", content: "sample, something" },
          ]}
          />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  },
})
