import React from "react";
import s from "./search.module.scss";
import icon from './magnifier.svg'

export default class Specs extends React.Component {
  render() {
    return (
      <div className={s.wrapper}>
          <form action="/store/search/" method="get" role="search" className={s.content}>
          <img src={icon} alt="search" />
            <input type="search" name="q" placeholder="Search our documentation..." label="Search" className={s.searchBar} />
          </form>
      </div>
    );
  }
}
