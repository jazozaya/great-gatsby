import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Category from "./category";
import { categories } from "./category/constants";
import { isMobile } from './../../../constants'

import arrow from "./arrow.svg";

import styles from "./sidebar.module.scss";

export default props => (
  <StaticQuery
    query={graphql`
      query {
        docs: allMarkdownRemark(sort: { fields: [frontmatter___title] }) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                path
                category
                section
              }
            }
          }
        }
      }
    `}
    render={data => <SideBar data={data} details={props.details} />}
  />
);

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
      isMobile: true
    };
  }

  componentDidMount() {
    this.setState({ isMobile: isMobile() });
  }

  renderFull(wrapper) {
    const { data, details } = this.props;

    const downloadDocs = data.docs.edges.filter(edge => {
      return edge.node.frontmatter.category === categories.downloads;
    });

    const tutorialsDocs = data.docs.edges.filter(edge => {
      return edge.node.frontmatter.category === categories.tutorials;
    });

    const userGuidesDocs = data.docs.edges.filter(edge => {
      return edge.node.frontmatter.category === categories.guides;
    });

    const troubleshootingDocs = data.docs.edges.filter(edge => {
      return edge.node.frontmatter.category === categories.troubleshooting;
    });

    const advancedDocs = data.docs.edges.filter(edge => {
      return edge.node.frontmatter.category === categories.advanced;
    });

    return (
      <div className={wrapper} id={styles.wrapperScroll}>
        <Category docs={tutorialsDocs} details={details} />
        <Category docs={userGuidesDocs} details={details} />
        <Category docs={advancedDocs} details={details} />
        <Category docs={troubleshootingDocs} details={details} />
        <Category docs={downloadDocs} details={details} />
      </div>
    );
  }

  render() {
    if (!this.state.isMobile) {
      return this.renderFull(styles.wrapper); // Dress it differently.
    }

    let toggle = styles.toggle;
    if (this.state.expand) {
      toggle = styles.toggle + " " + styles.expanded;
    }

    return (
      <div>
        {this.state.expand ? this.renderFull(styles.mobileWrapper) : null}
        <div className={toggle} onClick={() => this.setState({ expand: !this.state.expand })}>
          <img src={arrow} alt=""/>
        </div>
      </div>
    );
  }
}

SideBar.defaultProps = {
  details: {
    category: null,
    section: null
  }
};
