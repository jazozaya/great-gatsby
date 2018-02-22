import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/drilling-you-asked.-we-built.'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="Drilling! You Asked. We Built." />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
