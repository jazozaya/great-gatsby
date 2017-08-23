import React from 'react'
import Helmet from 'react-helmet'
export default class Contact extends React.Component {

  render() {
    return (
      <section className="not-found">
        <Helmet>
          <title>Voltera | Page Not Found (404)</title>
          <meta name="description" content="Contact information for technical inquiries and customer support. We normally respond within 2 business days." />
        </Helmet>
        <h1>Uh Oh! 404 Page not found!</h1>
        <p>You've requested a page that does not exist anymore.</p>
        <p>We recently updated our website and it's possible we broke some things along the way. Please let us know what you are looking for by emailing <strong>support@voltera.io</strong>.</p>
      </section>
    )
  }
}
