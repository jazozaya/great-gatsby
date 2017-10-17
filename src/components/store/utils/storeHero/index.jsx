import React from 'react'
import Bowser from 'bowser'
import SearchBar from 'components/store/utils/searchBar'
import './storeHero.scss'

export default class StoreHero extends React.Component {
  render() {

    const spacer =  !Bowser.mobile ? "mini-spacer" : "";

    return (
      <div className={`store-hero-wrapper ${spacer}`}>
        <div className="store-hero">
          <h1>Welcome to our HeroStore</h1>
          <p className='pull-center'>From Arduino templates to empty ink cartridges, you will find everything you need to build hardware faster here.</p>
          <SearchBar />
        </div>
      </div>
    )
  }
}
