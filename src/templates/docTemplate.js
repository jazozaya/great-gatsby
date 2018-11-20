import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "components/layout";
import DocsTemplate from "components/docs/template";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead, excerpt } = markdownRemark;
  const details = {
    category: frontmatter.category,
    section: frontmatter.section
  };
  return (
    <Layout pathname={frontmatter.path}>
      <Helmet>
        <title>Voltera | {frontmatter.title}</title>
        <meta name="description" content={excerpt} />
      </Helmet>
      <DocsTemplate details={details}>
        <h1>{frontmatter.title}</h1>
        <span>{frontmatter.date}</span>
        <br />
        <span>{timeToRead} minute read.</span>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
      </DocsTemplate>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        category
        section
      }
    }
  }
`;
