import React from "react";
import Button from "components/common/button";

import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import styles from "./hero.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        hero: file(relativePath: { eq: "hero/circuit-board-printer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <Hero data={data} />}
  />
);
class Hero extends React.Component {
  render() {
    return (
      <div className={styles.hero}>
        <Img className={styles.imageWrap} fluid={this.props.data.hero.childImageSharp.fluid} />
        <div className={styles.text}>
          <h1>Build hardware faster.</h1>
          <p>
            Prototype on your desktop with the
            <br />
            Voltera V-One PCB Printer.
          </p>
          <div className={styles.buttonWrap}>
            <div className={styles.buttons}>
              <Button label="Buy Now - $4,199" url="/store/" internal color="light" />
            </div>
            <div className={styles.buttons}>
              <Button label="Learn More" url="/product/technology/" internal color="clear" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
