import React from "react";
import Articles from "../articles";
import Arrow from "../arrow";

import styles from "./section.module.scss";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };

    const { details, docs } = props;
    if (docs.length > 0) {
      if (details.section === docs[0].node.frontmatter.section) {
        this.state.expand = true;
      }
    }
  }
  render() {
    const { docs } = this.props;

    // Early return if our section is empty.
    if (docs.length === 0) {
      return null;
    }

    return (
      <div className={styles.section}>
        <h3 onClick={() => this.setState({ expand: !this.state.expand })}>
          <Arrow expand={this.state.expand} />
          {docs[0].node.frontmatter.section}
        </h3>
        {this.state.expand ? <Articles docs={docs} nested /> : null}
      </div>
    );
  }
}
