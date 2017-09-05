import React from 'react'
import Helmet from 'react-helmet'
import Collection from 'components/store/collection'
import { CookiesProvider } from 'react-cookie'

export default class MyProduct extends React.Component {

  render() {
    return (
      <CookiesProvider>
        <Collection query={this.props.location.search}/>
      </CookiesProvider>
    )
  }
}
