import React from "react";
import SideBar from "./sidebar";
import Search from "./search";
import CallToAction from "components/common/cta";

import { graphql, StaticQuery, Link } from "gatsby";
import Img from "gatsby-image";

import helloWorld from "./quickStart/helloWorld.svg";
import drilling from "./quickStart/drilling.svg";
import downloads from "./quickStart/download.svg";

import s from "./docs.module.scss";
import QuickStart from "./quickStart";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        docs: allFile(filter: { relativeDirectory: { eq: "docs" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 180, height: 180, quality: 90) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Docs data={data} />}
  />
);

class Docs extends React.Component {
  render() {
    const { docs } = this.props.data;

    const intercom = docs.edges[0].node.childImageSharp.fixed;
    const forums = docs.edges[1].node.childImageSharp.fixed;

    return (
      <div>
        <Search />
        <section className={s.wrapper}>
          <SideBar details={this.props.details} />
          <div className={s.document}>
            <h1>Tutorials, user guides and troubleshooting tips.</h1>
            <p>Get to know the basics of the Voltera V-One and learn a few tricks along the way!</p>
            <div className="flex-row">
              <QuickStart icon={helloWorld} link="/docs/hello-world/printer-setup/">
                <h2>Getting Started!</h2>
                <p>Print your first board and learn the basics with the Hello World tutorial!</p>
              </QuickStart>
              <QuickStart icon={drilling} link="/docs/punk-console/drill-safety/">
                <h2>Start Drilling!</h2>
                <p>Create the Punk Console! Use the drill to create a double sided board.</p>
              </QuickStart>
              <QuickStart icon={downloads} link="/docs/desktop-application/">
                <h2>Download App!</h2>
                <p>Looking for the software? Get it here and jump right into it!</p>
              </QuickStart>
            </div>
            <div className={s.infoWrapper}>
              <div className={s.info}>
                <Img fixed={intercom} className={s.imgWrapper} />
                <div>
                  <h2>Need help? Say hello!</h2>
                  <p>Live chat with our support team by clicking the green bubble in the bottom right of the desktop app.</p>
                </div>
              </div>
              <div className={s.info}>
                <Img fixed={forums} className={s.imgWrapper} />
                <div>
                  <h2>Join the community!</h2>
                  <p> Visit our forums <a href="http://community.voltera.io/" target="_blank" rel="noopener noreferrer">here</a> and join the conversation to chat with beginners and experts.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CallToAction
          title="Can't find something?"
          subtitle="Let us know. We can help."
          buttonOne={{
            label: "Contact Us",
            url: "/contact/",
            internal: true
          }}
        />
      </div>
    );
  }
}
