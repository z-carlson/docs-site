import "normalize.css";
import "./src/styles/global.css";
import React from "react";
import { ThemeProvider } from "./src/utils/ThemeContext";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "./src/components/CodeBlock";

const components = {
  pre: (props) => <CodeBlock {...props} />,
  // const lang = props.children.props.className?.replace(/language-/, "") || "";

  // return (
  //   <Highlight
  //     {...defaultProps}
  //     code={props.children.props.children}
  //     language="javascript"
  //   >
  //     {({ style, tokens, getLineProps, getTokenProps }) => (
  //       <pre className={lang} style={{ ...style, padding: "20px" }}>
  //         {tokens.map((line, i) => (
  //           <div key={i} {...getLineProps({ line, key: i })}>
  //             {line.map((token, key) => (
  //               <span key={key} {...getTokenProps({ token, key })} />
  //             ))}
  //           </div>
  //         ))}
  //       </pre>
  //     )}
  //   </Highlight>
  // );
};

export function wrapRootElement({ element }) {
  return (
    <ThemeProvider>
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeProvider>
  );
}
