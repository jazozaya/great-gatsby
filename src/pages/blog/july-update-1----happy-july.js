import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/july-update-1----happy-july'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="July Update 1 -- Happy July!" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
