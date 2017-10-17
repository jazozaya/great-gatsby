import React from 'react'
import Helmet from 'react-helmet'
import Main from 'components/store/main'
import StoreHero from 'components/store/utils/storeHero'

export default class MyStore extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Store</title>
          <meta name="description" content="From Arduino templates to empty ink cartridges, you will find everything you need to build hardware faster here." />
        </Helmet>
        <StoreHero />
        <Main />
      </div>
    )
  }
}
