import React from 'react'
import Helmet from 'react-helmet'
import queryString from 'query-string'

import Main from 'components/main'

export default class MyQuote extends React.Component {

  render() {
    const { q } = queryString.parse(this.props.location.search);
    return (
      <div>
        <Main profile={q}/>
      </div>
    )
  }
}
