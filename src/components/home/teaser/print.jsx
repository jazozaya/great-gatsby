import React from "react";
import YouTube from "components/common/youtube";

import Button from "components/common/button";

import { StaticQuery, graphql } from "gatsby";

import styles from "./teaser.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "youtubeScreen/print-conductive-silver-ink.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <Feature data={data} />}
  />
);

class Feature extends React.Component {
  render() {
    return (
      <div className="flex-row">
        <div className={styles.videoWrap}>
          <YouTube videoId="PeW1nURJ5ww" fluid={this.props.data.file.childImageSharp.fluid} width="600" />
        </div>
        <div className={styles.description}>
          <h2>Print your own circuit boards.</h2>
          <p>On your desktop and on your schedule, the Voltera V-One gets you from prototype to production faster than ever before.</p>
          <p>
            Create <strong>two layer circuit boards</strong> on your desk. Load your Gerber files and watch the dispenser lay down a{" "}
            <strong>silver-based conductive ink</strong> to print your circuit right before your eyes.
          </p>
          <div className={styles.buttonWrap}>
            <Button label="Print Circuits" internal url="/product/print/" color="dark" />
          </div>
        </div>
      </div>
    );
  }
}
