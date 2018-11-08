import React from "react";

import Img from "gatsby-image";
import { graphql, StaticQuery } from "gatsby";

import style from "./testimonial.module.scss";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        dyson: file(relativePath: { eq: "testimonial/james-dyson.jpg" }) {
          childImageSharp {
            fixed(width: 150, height: 150, quality: 90) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => <Testimonial data={data} />}
  />
);

class Testimonial extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <div className={style.testimonial}>
          <div>
            <p className={style.quote}>
              &ldquo;As an engineer, I know the frustrations of waiting for circuit boards, and the Voltera V-One elegantly solves this
              problem.&rdquo;
            </p>
            <h3 className={style.author}>Sir James Dyson - Inventor & founder.</h3>
          </div>
          <a href="http://www.dyson.com/community/aboutdyson.aspx" target="_blank" rel="noopener noreferrer">
            <Img fixed={this.props.data.dyson.childImageSharp.fixed} className={style.imageWrap}/>
          </a>
        </div>
      </div>
    );
  }
}
