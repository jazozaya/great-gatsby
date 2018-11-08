import React from "react";
import YouTube from "components/common/youtube";
import Button from "components/common/button";

import { graphql, StaticQuery } from "gatsby";
import styles from "./teaser.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "youtubeScreen/dispense-solder-paste.jpg" }) {
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
      <div className="flex-row reverse-wrap">
        <div className={styles.description}>
          <h2>Skip the soldering iron.</h2>
          <p>
            Focus on designing, not soldering. Regardless if your boards come <strong>from a factory, or from your desk</strong> - just
            mount them on the V-One and off you go.
          </p>
          <p>
            Say goodbye to stencils and <strong>cut your assembly time in half.</strong> Assembling boards is easy - it is quick turn PCBA
            at your desk!
          </p>
          <div className={styles.buttonWrap}>
            <Button label="Dispense Paste" internal url="/product/paste/" color="dark" />
          </div>
        </div>
        <div className={styles.videoWrap}>
          <YouTube videoId="NdJQ5Xl4jkw" fluid={this.props.data.file.childImageSharp.fluid} width="600" />
        </div>
      </div>
    );
  }
}
