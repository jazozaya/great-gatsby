import React from 'react'
import Link from 'gatsby-link'

export default class collectionTab extends React.Component {

  renderLinks() {
    const { collections } = this.props;
    const cb = this.props.cb || function(){} //Use function if a cb wasn't defined.

    return collections.map((collection, index) =>
      <Link key={index}
            onClick={() => cb(`/store/collection/?handle=${collection.handle}&collection_id=${collection.collection_id}`, collection.collection_id)}
            to={`/store/collection/?handle=${collection.handle}&collection_id=${collection.collection_id}`}>
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
