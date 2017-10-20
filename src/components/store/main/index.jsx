import React from 'react'
import LazyLoad from 'react-lazyload'

import Collection from 'components/store/collection'
import Product from 'components/store/product'
import Box from 'components/product/box'

import { collections as c } from 'components/store/constants'

import './main.scss'

export default class Main extends React.Component {

  render() {

    return (
      <div className="store-wrapper">
        <Product productId={449665985} noRelevant/>
        <section className="no-top">
          <Box />
        </section>
        <div className="collection-separator"/>
        <LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.bundles.id} noHelmet/>
        </LazyLoad>
        <div className="collection-separator"/>
        <LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.accessories.id} noHelmet/>
        </LazyLoad>
        <div className="collection-separator"/>
        <LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.inks.id} noHelmet/>
        </LazyLoad>
        <div className="collection-separator"/>
        <LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.solder.id} noHelmet/>
        </LazyLoad>
        <div className="collection-separator"/>
        <LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.substrates.id} noHelmet/>
        </LazyLoad>
        <div className="collection-separator"/>
        <LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.swag.id} noHelmet/>
        </LazyLoad>
      </div>
    );
  }
}
