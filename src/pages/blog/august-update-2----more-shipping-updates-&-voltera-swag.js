import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/august-update-2----more-shipping-updates-&-voltera-swag'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="August Update 2 -- More Shipping Updates + Voltera Swag" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
