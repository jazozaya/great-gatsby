import React from "react";
import Section from "../section";
import Articles from "../articles";
import Arrow from "../arrow";

import { categories, sections } from "./constants";

import s from "./category.module.scss";

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };

    const { details, docs } = props;
    if (docs.length > 0) {
      if (details.category === docs[0].node.frontmatter.category) {
        this.state.expand = true;
      }
    }
  }

  renderTutorialSections() {
    const { docs, details } = this.props;
    const helloWorldDocs = docs.filter(doc => {
      return doc.node.frontmatter.section === sections[categories.tutorials][0];
    });

    const punkConsoleDocs = docs.filter(doc => {
      return doc.node.frontmatter.section === sections[categories.tutorials][1];
    });

    const allOtherDocs = docs.filter(doc => {
      return doc.node.frontmatter.section === "";
    });

    return (
      <div>
        <Section docs={helloWorldDocs} details={details} />
        <Section docs={punkConsoleDocs} details={details} />
        <Articles docs={allOtherDocs} details={details} />
      </div>
    );
  }

  renderGuideSections() {
    const { docs, details } = this.props;
    const exportDocs = docs.filter(doc => {
      return doc.node.frontmatter.section === sections[categories.guides][0];
    });

    const allOtherDocs = docs.filter(doc => {
      return doc.node.frontmatter.section === "";
    });

    return (
      <div>
        <Section docs={exportDocs} details={details} />
        <Articles docs={allOtherDocs} details={details} />
      </div>
    );
  }

  renderSections() {
    const { docs, details } = this.props;
    // Depending on the Category - We will render different sections.

    switch (docs[0].node.frontmatter.category) {
      case categories.tutorials:
        return this.renderTutorialSections();
      case categories.guides:
        return this.renderGuideSections();
      default:
        return <Articles docs={docs} details={details} />;
    }
  }

  render() {
    const { docs } = this.props;
    return (
      <div className={s.category}>
        <h2 onClick={() => this.setState({ expand: !this.state.expand })}>
          <Arrow expand={this.state.expand} />
          {docs[0].node.frontmatter.category}
        </h2>
        <div className={s.nested}>{this.state.expand ? this.renderSections() : null}</div>
      </div>
    );
  }
}
