import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/938-thank-yous-to-close-2016'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="938 Thank You's to Close 2016" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
