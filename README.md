Notes on using this setup

This is a starting point for creating a documentation site with [Gatsby](https://www.gatsbyjs.com/) and [MDX](https://mdxjs.com/). It was designed to be support a simple authoring process and nice, clean content for readers.

Here are some things to know if you wanted to use this as a start to your own docs site:

## MDX

- Content is sourced from MDX files. These can include codeblocks with syntax highlighting (react-prism ...), images, and import other components, like the tip and warning components
- Imports need to come after frontmatter (see demo-post.mdx for an example)
- I was occassionally getting errors during development when the mdx-scopes-dir cache gets messed up. Deleting the cache fixed it.

## Pages and Content

- Main pages (index and about) live in /pages
- topics (the actual help content) live in the /content directory and use mdx files. These use the topic.js template and are built at run-time with gatsby-node.js createPages and graphql querying the data for them.

## Styles

- Global styles live in 'src/styles/global.css'
- Custom css properties used for consistent styling and easy themeing
- You can also use styled-components within components or other files as necessary
- This project uses normalize.css for a reset
- Uses react context api and gatsby wraprootelement for themeing

## SEO

Uses React Helmet for the page heads. This is where the favicon, page titles, and metadata are set. Use the <SEO /> tag on pages as needed.

## Resources

These links have been helpful:

- https://www.gatsbyjs.com/docs/how-to/routing/mdx/
- https://mdxjs.com/
- https://www.gatsbyjs.com/docs/recipes/sourcing-data/#sourcing-markdown-data-for-blog-posts-and-pages-with-graphql
- https://styled-components.com/
- See idratherbewriting example of using YAML

## Tables of Contents

The main, left nav is based on the toc.yaml file. This needs to be manually updated to add links, but provides convenient customization (when you want to change the order or hide topics).
