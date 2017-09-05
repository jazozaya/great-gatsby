import React from 'react'

import { strip } from '../common'
import './product.scss'
import { CookiesProvider, withCookies, Cookies } from 'react-cookie';

class Product extends React.Component {
  // The challenge is transmitting information between views.
  // Ideally we can have 1 source of knowledge so we aren't pulling everytime.
  // Almost like a a cache? Will the browser do that auomatically?
  componentWillMount() {
    const { cookies } = this.props;
    console.log(cookies.get('test'))
  }
  render() {

    return (

      <h1>This is my product page!</h1>

    );
  }
}

export default withCookies(Product);
