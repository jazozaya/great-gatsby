import React from 'react'
import Search from 'components/store/search'
import Helmet from 'react-helmet'
import queryString from 'query-string'

export default class MySearch extends React.Component {

  render() {

    const { q } = queryString.parse(this.props.location.search);

    return (
      <div>
        <Helmet>
          <title>Voltera | Store Search</title>
          <meta name="description" content="Find the components you are looking for to start building hardware faster. " />
        </Helmet>
        <Search search={q}/>
      </div>
    )
  }
}
