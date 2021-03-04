Notes on using this setup

# TODO:

- placeholder content
- Clean image styles
- use react context api and wrapRootElement to add themeing: https://www.gatsbyjs.com/blog/2019-01-31-using-react-context-api-with-gatsby/
- https://www.gatsbyjs.com/docs/how-to/sourcing-data/sourcing-from-json-or-yaml/
- add rest of css custom properties
- Build main home page (index.js)
- navs
- Look into search with docsearch.algolia.com
- Clean up code and this README
  - layout should be broken into multiple components
- syntax highlighting for code blocks: https://mdxjs.com/guides/syntax-highlighting

Placeholder content:

- Getting Started
  - overview
  - Quick Start
  - Key Concepts
- Tutorials
  - walk through of some sort
    - creating a new topic, adding it to TOC
- How-to guides
  - Adding new topics
  - Updating TOC
  - Using Images
  - Replacing the LOGO in the header
  - importing components in MDX files
- References
  - Some pretend API reference

## MDX

- imports need to come after frontmatter
- sometimes the mdx-scopes-dir cache gets messed up and you need to delete the cache.

## Pages and Content

Main pages live in /pages
topics live in the /content directory and use mdx files. These use the topic.js template and are built at run-time with gatsby-node.js createPages and graphql querying the data for them.

## Styles

global styles live in 'src/styles/global.css'
can also use styled-components within components or other files as necessary
uses normalize.css

## SEO

uses React Helmet for the page heads. This is where the favicon, page titles, and metadata are set. Use the <SEO /> tag on pages as needed.

## Resources

**Ooh! I can use these links for the "References" section on index.js**
These links have been helpful:

- https://www.gatsbyjs.com/docs/how-to/routing/mdx/
- https://mdxjs.com/
- https://www.gatsbyjs.com/docs/recipes/sourcing-data/#sourcing-markdown-data-for-blog-posts-and-pages-with-graphql
- https://styled-components.com/
- See idratherbewriting example of using YAML

## Tables of Contents

Each Product will have a YAML file for the TOC. Will need to be manually updated. This will be the main sidebar table of contents for that product. The advantage is that it makes it easy to order things and add/remove links.

Then will pull this data in with gatsby / graphql to build the TOC component based on the path.
