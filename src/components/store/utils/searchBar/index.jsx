import React from 'react'
import './searchBar.scss'

export default class SearchBar extends React.Component {

  render() {
    return(
      <div className="search-bar-wrapper">
        <form action="/store/search/" method="get" role="search">
          <input type="search" name="q" placeholder="What are you looking for today?" label="Search" className="search-bar"/>
          <input type="submit"  value="Search" className="search-button"/>
        </form>
      </div>
    )
  }
}
