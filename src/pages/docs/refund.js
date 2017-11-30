import React from 'react'
import Helmet from 'react-helmet'
import Refund from 'components/docs/refund'

export default class MyTOS extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Refund Policy</title>
          <meta name="description" content="Learn about our return policy and exchanges." />
        </Helmet>
        <Refund />
      </div>
    );
  }
}
