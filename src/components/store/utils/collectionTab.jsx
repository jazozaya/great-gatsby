import React from 'react'
import Link from 'components/common/linkWrapper'

import { collections as c } from 'components/store/constants'

import './collectionTab.scss'

export default class collectionTab extends React.Component {

  // Could be an array.map... instead.
  render() {
    return (
      <div className="collection-tab">
        <Link to={`/store/collection/${c.bundles.handle}/`}><h3>{c.bundles.title}</h3></Link>
        <Link to={`/store/collection/${c.solder.handle}/`}><h3>{c.solder.title}</h3></Link>
        <Link to={`/store/collection/${c.accessories.handle}/`}><h3>{c.accessories.title}</h3></Link>
        <Link to={`/store/collection/${c.inks.handle}/`}><h3>{c.inks.title}</h3></Link>
        <Link to={`/store/collection/${c.substrates.handle}/`}><h3>{c.substrates.title}</h3></Link>
        <Link to={`/store/collection/${c.swag.handle}/`}><h3>{c.swag.title}</h3></Link>
      </div>
    )
  }
}
