import React from "react";
import YouTube from "components/common/youtube";
import Button from "components/common/button";

import { graphql, StaticQuery } from "gatsby";
import styles from "./teaser.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "youtubeScreen/voltera-software.jpg" }) {
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
          <YouTube videoId="3oCkXdwWpUY" fluid={this.props.data.file.childImageSharp.fluid} width="600" />
        </div>
        <div className={styles.description}>
          <h2>Software you will love.</h2>
          <p>
            Voltera’s software is designed to be understood. From importing your Gerber files to the moment you press print, the{" "}
            <strong>software walks you though each step</strong> with built in videos and tutorials.
          </p>
          <p>
            Compatible with <strong>EAGLE, Altium, KiCad, Mentor Graphics, Cadence, DipTrace and Upverter. </strong>
            Is your CAD tool not on this list? Contact us to find out if we're compatible!
          </p>
          <div className={styles.buttonWrap}>
            <Button label="Learn More" internal url="/product/software/" color="dark" />
          </div>
        </div>
      </div>
    );
  }
}
