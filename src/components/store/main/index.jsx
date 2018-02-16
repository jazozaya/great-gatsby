import React from 'react'
import LazyLoad from 'react-lazyload'

import Collection from 'components/store/collection'
import Product from 'components/store/product'

import { collections as c } from 'components/store/constants'

import './main.scss'

export default class Main extends React.Component {

  render() {

    return (
      <div className="store-wrapper">
        <Product productId={"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ0OTY2NTk4NQ=="} noRelevant/>
        {/*<div id="drill">
          <Product productId={"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ4MzI5NjczOTM1OA=="} noRelevant/>
        </div>*/}
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
        {/*<LazyLoad height={500} offset={200} once>
          <Collection collectionId={c.drilling.id} noHelmet/>
        </LazyLoad>*/}
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
