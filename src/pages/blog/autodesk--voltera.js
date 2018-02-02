import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/autodesk--voltera'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="Autodesk  Voltera" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
