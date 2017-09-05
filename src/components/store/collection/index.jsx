import React from 'react'
import { withCookies, Cookies } from 'react-cookie';

import { shopClient } from 'components/store/common'

export default class ProductSnippet extends React.Component {

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

  render() {

    return (
      <section className="store-wrapper">
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <CollectionTab />
        {this.renderCollectionTitle()}
        <div className="store">
          {this.renderProducts()}
        </div>
      </section>
    );
  }
}
