import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/go-flexible-led-cube'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="Go Flex(ible LED Cube)" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
