import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Nav = styled.aside`
  font-size: var(--smallText);
  margin-right: 1rem;
  margin-top: 3rem;

  a {
    text-decoration: none;
    color: var(--textColor);
  }

  a:hover {
    color: var(--lightBlue);
  }

  span {
    color: var(--red);
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 5px;
  }

  ul > ul {
    padding-left: 10px;
  }

  li {
    padding: 0;
    line-height: 1.3;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export function SamePageNav({ tableOfContents }) {
  return (
    <Nav>
      {/* Use optional chaining to check if there are subheadings before rendering this */}
      {tableOfContents.items && <span>On this page</span>}
      {tableOfContents?.items?.map((item) => {
        return (
          <ul>
            <li>
              <Link to={item.url}>{item.title}</Link>
            </li>
            <ul>
              {item?.items?.map((item) => {
                return (
                  <li>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </ul>
        );
      })}
    </Nav>
  );
}
