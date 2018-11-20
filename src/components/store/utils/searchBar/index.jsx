import React from 'react'
import s from './searchBar.module.scss'

export default class SearchBar extends React.Component {

  render() {
    return(
      <div className={s.wrapper}>
        <form action="/store/search/" method="get" role="search">
          <input type="search" name="q" placeholder="What are you looking for today?" label="Search" className={s.searchBar}/>
          <input type="submit"  value="Search" className={s.searchButton}/>
        </form>
      </div>
    )
  }
}
