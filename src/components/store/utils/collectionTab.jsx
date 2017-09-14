import React from 'react'
import Link from 'components/common/linkWrapper'

import './collectionTab.scss'

export default class collectionTab extends React.Component {

  renderLinks() {
    const { collections, cb } = this.props;

    return collections.map((collection, index) =>
      <Link key={index}
            onClick={() => cb(`/store/?handle=${collection.handle}&collectionId=${collection.collectionId}`, collection.collectionId)}
            to={`/store/?handle=${collection.handle}&collectionId=${collection.collectionId}`}>
        <h3>{collection.title}</h3>
      </Link>
    )
  }

  render() {
    return (
      <div className="collection-tab">
        {this.renderLinks()}
      </div>
    )
  }
}
