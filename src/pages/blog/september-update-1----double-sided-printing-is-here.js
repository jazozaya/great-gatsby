import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/september-update-1----double-sided-printing-is-here'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="September Update 1 -- Double Sided Printing Is Here!" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
