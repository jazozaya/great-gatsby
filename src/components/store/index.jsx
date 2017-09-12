import React from 'react'

import CollectionTab from 'components/store/utils/collectionTab'
import { strip, fetchAllCollections } from 'components/store/common'

import './store.scss'

export default class Store extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentWillMount() {
    fetchAllCollections().then((collections) => this.setState({collections: collections}))
  }

  render() {
    return(
      <section className="store-wrapper">
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <CollectionTab collections={this.state.collections}/>
      </section>
    );
  }
}
