import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/july-update-2----we-are-so-close'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="July Update 2 -- We are so close!" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
