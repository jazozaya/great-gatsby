import React from 'react'
import Helmet from 'react-helmet'
import Privacy from 'components/docs/privacy'

export default class MyPrivacy extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Privacy Policy</title>
          <meta name="description" content="We take privacy seriously. Learn about our privacy policy here." />
        </Helmet>
        <Privacy />
      </div>
    );
  }
}
