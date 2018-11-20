import React from "react";
import { Link } from "gatsby";

import s from "./articles.module.scss";

export default class Articles extends React.Component {
  render() {
    const { docs, nested } = this.props;
    const divStyle = nested ? s.articles + " " + s.nested : s.articles;

    return (
      <div className={divStyle}>
        {docs.map(({ node }) => (
          <Link key={node.id} activeClassName={s.activeArticle} to={node.frontmatter.path}>
            {node.frontmatter.title}
          </Link>
        ))}
      </div>
    );
  }
}
