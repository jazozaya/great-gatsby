import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/you-spin-me-right-round-like-a-drill-bit'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="You Spin Me Right Round (Like A Drill Bit)" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
