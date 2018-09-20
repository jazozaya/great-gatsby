import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/voltera-is-among-canadas-fastest-growing-startups'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="Voltera is among Canada's fastest growing startups!" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
