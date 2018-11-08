import React from "react";
import styles from "./googleMap.module.scss";

import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        map: file(relativePath: { eq: "contact/our-office.png" }) {
          childImageSharp {
            fluid(maxWidth: 1205, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <GoogleMap data={data} />}
  />
);

class GoogleMap extends React.Component {
  render() {
    return (
      <a
        className={styles.office}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps/dir//Voltera,+Kitchener,+ON/@43.4554977,-80.5306033,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882bf4f565d4a1f1:0xf4df5d1dc7f5a6c5!2m2!1d-80.495584!2d43.455503"
      >
        <Img fluid={this.props.data.map.childImageSharp.fluid} />
      </a>
    );
  }
}
