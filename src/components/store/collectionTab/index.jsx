import React from 'react'
import { withCookies, Cookies } from 'react-cookie';

import { shopClient } from 'components/store/common'

const collectionWhiteList = [
  298518977, //Swag
  315550913, //Bundles
  343929793, //Solder
  262492865, //Accessories
  343930305, // Conductive-Inks
  302583105, //Standard Substrates
]

class collectionTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
    this.filterCollections  = this.filterCollections.bind(this);
  }

  componentWillMount() {

    const { cookies } = this.props;
    var collections = cookies.get('collections') || null
    if (collections) {
      console.log('Collections retrieved from cookies!')
      this.setState({collections: collections})
    } else {
      shopClient.fetchAllCollections().then(this.filterCollections)
    }
  }

  filterCollections(collections) {

    const { cookies } = this.props;

    // Massage our information a bit, filter out unused collections.
    var extractedCol = collections.map(collection => collection.attrs)
    var filteredCol = extractedCol.filter(collection => collectionWhiteList.includes(collection.collection_id))
    this.setState({collections: filteredCol})
    cookies.set('collections', filteredCol)

  }

  renderLinks() {
    if(this.state.collections.length) {
      return this.state.collections.map((collection, index) =>
        <a key={index} href={`/store/collection?handle=${collection.handle}`}>
          <h3>{collection.title}</h3>
        </a>)
    }
    return null;

  }

  render() {
    return (
      <div className="collection-tab">
        {this.renderLinks()}
      </div>
    )
  }
}

export default withCookies(collectionTab);
