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
  }

  details:focus {
    outline: none;
    outline-width: 0;
  }

  details ul {
    list-style: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  a {
    color: var(--textColor);
    text-decoration: none;
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

export const TOC = (props) => {
  return (
    <LeftNav className="left-nav">
      <nav>
        {toc.map((group) => (
          <details>
            <summary className="heading">{group.heading}</summary>
            {group.subitems && (
              <ul className="subitems">
                {group.subitems.map((item) => (
                  <li>
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
