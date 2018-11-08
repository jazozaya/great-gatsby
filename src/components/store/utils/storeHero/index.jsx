import React from "react";
import SearchBar from "components/store/utils/searchBar";
import styles from "./storeHero.module.scss";

export default class StoreHero extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <h1>Welcome to our store</h1>
          <p className="pull-center">
            From Arduino templates to empty ink cartridges, you will find everything you need to build hardware faster here.
          </p>
          <SearchBar />
        </div>
      </div>
    );
  }
}
