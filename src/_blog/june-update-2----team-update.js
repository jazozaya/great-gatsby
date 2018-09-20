import React from 'react'
import Helmet from 'react-helmet'


import Article from 'components/blog/article'
import { data } from 'components/blog/content/june-update-2----team-update'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="June Update 2 -- Team Update" />
        </Helmet>
        <Article data={data}/>
      </div>
    )
  }
}
