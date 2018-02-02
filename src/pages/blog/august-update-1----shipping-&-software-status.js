import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/august-update-1----shipping-&-software-status'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="August Update 1 -- Shipping & Software Status" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
