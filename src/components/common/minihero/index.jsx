import React from "react";

import styles from "./minihero.module.scss";

export default class MiniHero extends React.Component {
  render() {
    const { title, description } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.miniHero}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.factWrapper}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
