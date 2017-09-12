import React from 'react'
import Collection from 'components/store/collection'

export default class MyCollection extends React.Component {

  render() {
    return <Collection query={this.props.location.search}/>
  }
}
