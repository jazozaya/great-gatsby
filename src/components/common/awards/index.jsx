import React from "react";
import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

import style from "./awards.module.scss";
import { isMobile, isMobileStart } from "../../../constants";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "awards" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 200, height: 120, quality: 90) {
                  ...GatsbyImageSharpFixed_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Awards data={data} />}
  />
);

class Awards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: isMobileStart
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    this.setState({isMobile: isMobile()})
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderDivider() {
    return this.state.isMobile ?  null: <div className={style.vertical} />
  }

  render() {
    const { data } = this.props;
    const techcrunch = data.allFile.edges[3].node.childImageSharp.fixed;
    const popsci = data.allFile.edges[2].node.childImageSharp.fixed;
    const dyson = data.allFile.edges[0].node.childImageSharp.fixed;
    const maker = data.allFile.edges[1].node.childImageSharp.fixed;

    return (
      <div className={style.wrapper}>
        <h2>An award winning machine.</h2>
        <div className={`${style.awards} flex-row center-narrow`}>
          <div>
            <a
              href="http://techcrunch.com/2015/01/08/and-the-winner-of-hardware-battlefield-2015-is-voltera/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fixed={techcrunch} className={style.logo} />
            </a>
            <h3>"International Winner"</h3>
          </div>
          {this.renderDivider()}
          <div>
            <a href="http://www.popsci.com/3d-printer-circuit-boards" target="_blank" rel="noopener noreferrer">
              <Img fixed={popsci} className={style.logo} />
            </a>
            <h3>"Invention of the Year"</h3>
          </div>
          {this.renderDivider()}
          <div>
            <a
              href="http://www.jamesdysonaward.org/en-GB/news/voltera-v-one-wins-2015-james-dyson-award/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fixed={dyson} className={style.logo} />
            </a>
            <h3>"International Winner"</h3>
          </div>
          {this.renderDivider()}
          <div>
            <a
              href="http://makezine.com/2015/06/15/volteras-v-one-prints-2-layer-circuit-boards/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fixed={maker} className={style.logo} />
            </a>
            <h3>"Editor's Choice"</h3>
          </div>
        </div>
      </div>
    );
  }
}
