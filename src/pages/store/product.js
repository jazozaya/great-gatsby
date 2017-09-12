import React from 'react'
import Product from 'components/store/product'

export default class MyProduct extends React.Component {

  render() {
    return <Product query={this.props.location.search}/>
  }
}
