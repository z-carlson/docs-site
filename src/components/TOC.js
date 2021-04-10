import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { toc } from "../content/toc.yaml";

export const LeftNav = styled.aside`
  border-right: 10px solid var(--accent);

  nav {
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    margin-left: 1rem;
  }

  details {
    padding: 1rem 0;
    border-top: 1px solid var(--accent);
  }

  details:hover {
    cursor: pointer;
    color: var(--pop);
  }

  summary:focus {
    outline: none;
    background-color: var(--accent);
  }

  details ul {
    list-style: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  details ul li a:focus {
    outline: none;
    background-color: var(--accent);
  }

  a {
    color: var(--textColor);
    text-decoration: none;
  }

  a:hover {
    color: var(--pop);
  }

  a + a {
    margin-top: 1rem;
  }

  .heading {
    font-weight: 600;
    text-transform: uppercase;
  }

  .subitems {
    padding: 0 1rem 1rem 1rem;
    text-transform: capitalize;
  }
`;

export const TOC = () => {
  return (
    <LeftNav className="left-nav">
      <nav>
        {toc.map((group, index) => (
          <details key={index}>
            <summary className="heading">{group.heading}</summary>
            {group.subitems && (
              <ul className="subitems">
                {group.subitems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </details>
        ))}
      </nav>
    </LeftNav>
  );
};
