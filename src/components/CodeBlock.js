import React, { useContext, useRef } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import { ThemeContext } from "../utils/ThemeContext";
import styled from "styled-components";

const Copy = styled.div`
  position: relative;

  margin-top: 1rem;

  span {
    position: absolute;
    top: -50px;
    right: 0px;
    color: var(--pop);
    opacity: 0;
    transition: all 0.3s;
    background: var(--background);
    padding: 0.5rem 1rem;
    box-shadow: var(--level1);
    border-radius: var(--borderRadius);
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  svg:hover {
    cursor: pointer;
    stroke: var(--pop);
  }

  svg:active {
    stroke: var(--accent);
    transform: scale(0.9);
  }
`;

export const CodeBlock = (props) => {
  const lang = props.children.props.className?.replace(/language-/, "") || "";
  const { theme, setTheme } = useContext(ThemeContext);

  const copyConfirmation = useRef(null);

  function copyCode(code) {
    console.log(copyConfirmation);
    navigator.clipboard.writeText(code);

    copyConfirmation.current.style.opacity = "1";

    setTimeout(function () {
      copyConfirmation.current.style.opacity = "0";
    }, 1000);
  }

  // todo: add clipboard icon - click to copy code to clipboard
  console.log(props.children.props.children);
  return (
    <>
      <Copy>
        <span ref={copyConfirmation}>Copied!</span>
        <svg
          onClick={() => copyCode(props.children.props.children)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--textColor)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-clipboard"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      </Copy>
      <Highlight
        {...defaultProps}
        code={props.children.props.children}
        language="javascript"
        theme={theme === "dark" ? nightOwl : nightOwlLight}
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className={lang} style={{ ...style, padding: "20px" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};
