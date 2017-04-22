import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import Helmet from "react-helmet"
import { config } from "config"
import Footer from 'components/footer'
import Header from 'components/header'

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
          title={config.siteTitle}
          meta={[
            { name: "description", content: "Voltera V-One. Build Hardware Faster" },
            { name: "keywords", content: "sample, something" },
          ]}
          />
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  },
})
