import React from 'react'
import Helmet from 'react-helmet'
import Privacy from 'components/docs/tos'

export default class MyTOS extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Terms of Service</title>
          <meta name="description" content="Learn about our warranty and our terms & conditions." />
        </Helmet>
        <Privacy />
      </div>
    );
  }
}
