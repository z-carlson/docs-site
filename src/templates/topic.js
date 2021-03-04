import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";
import SEO from "../components/SEO";
import { SamePageNav } from "../components/SamePageNav";
import styled from "styled-components";

const CrumbStyles = styled.div`
  margin-bottom: 2rem;
  font-size: var(--smallText);

  .you-are-here {
    font-weight: 600;
    color: var(--pop);
  }
`;

const BreadCrumb = (props) => {
  const crumbs = props.path.split("/");

  crumbs.shift();
  crumbs.pop();

  console.log(crumbs);
  let cleanCrumbs = crumbs.map((crumb) => {
    let parts = crumb.split("-");
    let cleanParts = parts.join(" ");
    return cleanParts;
  });

  console.log(cleanCrumbs);
  return (
    <CrumbStyles>
      {cleanCrumbs.map((crumb) => (
        <span>{crumb} &gt; </span>
      ))}
      <span className="you-are-here">{props.title}</span>
    </CrumbStyles>
  );
};

export default function Template({ data }) {
  const { mdx } = data; // data.mdx holds your post data
  const { frontmatter, body, tableOfContents } = mdx;

  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout>
        <main className="article-body">
          <BreadCrumb path={frontmatter.path} title={frontmatter.title} />
          <h1>{frontmatter.title}</h1>
          <span className="date">{frontmatter.date}</span>
          <MDXRenderer>{body}</MDXRenderer>
        </main>
        <SamePageNav tableOfContents={tableOfContents} />
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      tableOfContents(maxDepth: 3)
    }
  }
`;
