import React from 'react'
import Helmet from 'react-helmet'

import Preview from 'components/blog/preview'
import Welcome from 'components/blog/welcome'
import { previews } from 'components/blog/content'

export default class MyAbout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Our Blog</title>
          <meta name="description" content="Join us on our journey to modernize hardware prototyping" />
        </Helmet>
        <Welcome />
        <section>
          {previews.map((preview, index) => <Preview key={index} {...preview}/>)}
        </section>
      </div>
    )
  }
}
