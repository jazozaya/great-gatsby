import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

import style from "./about.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        map: file(relativePath: { eq: "about/around-the-world.png" }) {
          childImageSharp {
            fluid(maxWidth: 800, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        hero: file(relativePath: { eq: "about/v-one-assembly.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <About data={data} />}
  />
);

class About extends React.Component {
  render() {
    const { map, hero } = this.props.data;

    return (
      <div>
        <Img className={style.imageWrap} fluid={hero.childImageSharp.fluid} alt=""/>
        <section className={style.about}>
          <h1>Build Hardware Faster</h1>
          <p className="pull-center">It's not just a tagline. It is a mission</p>
          <h3>Our Story</h3>
          <p>
            Voltera was born out of a frustration that is common to all hardware devs - waiting weeks for boards to arrive from a fab shop
            while mechanical and software devs have the tools they need to prototype within hours or even instantly!{" "}
          </p>
          <p>In order to empower our users to build hardware faster, we know that we need to focus on:</p>
          <ul>
            <li>
              <strong>Reliability</strong> - you should know the spec and trust the machine to hit it every time.
            </li>
            <li>
              <strong>Accessibility</strong> - the platform should be as easy to use as a smartphone app
            </li>
            <li>
              <strong>Flexibility</strong> - so many users are creating flexible/stretchable electronics or printing other materials on
              various substrates.
            </li>
          </ul>
          <p>
            Giving back to our industry is important to us. We sit on the board of advisors for Intelliflex (previously Canadian Printed
            Electronics Industry Association), share what we learn at trade shows, and mentor younger hardware businesses.
          </p>
          <p>
            Most importantly, we listen to what our users say is slowing them down, and try to eliminate those hurdles. We want to be the
            go-to resource for the knowledge and tools to help you build hardware faster.{" "}
          </p>
          <p>Got ideas about how we can make that happen? Get in touch!</p>
          <h3>Our Users</h3>
          <Img fluid={map.childImageSharp.fluid} alt=""/>
        </section>
      </div>
    );
  }
}
