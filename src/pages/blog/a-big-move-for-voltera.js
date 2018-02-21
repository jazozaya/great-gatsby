import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/a-big-move-for-voltera'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="A big move for Voltera" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
