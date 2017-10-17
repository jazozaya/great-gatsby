import React from 'react'
import { collections as c } from 'components/store/constants'
import Collection from 'components/store/collection'
import StoreHero from 'components/store/utils/storeHero'

export default class MySwag extends React.Component {

  render() {
    return (
      <div>
        <StoreHero />
        <Collection collectionId={c.substrates.id}/>
      </div>
    )
  }
}
