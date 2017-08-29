import React from 'react'
import Helmet from 'react-helmet'
import Store from 'components/store'

export default class Spec extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Helmet>
          <title>Voltera | Store</title>
          <meta name="description" content="All the tools and accessories you need to prototype with the V-One." />
        </Helmet>
        <Store search={this.props.location.search}/>
      </div>
    )
  }
}
