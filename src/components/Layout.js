import React, { useState } from "react";
import { Link } from "gatsby";
import { TOC } from "./TOC";
import styled from "styled-components";
import { toc } from "../content/toc.yaml";
import logo from "../assets/logo.svg";

const Header = styled.header`
  position: relative;

  .hamburger {
    display: none;
    margin: 1rem;
  }

  .hamburger:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    nav {
      display: none;
    }
    .hamburger {
      display: block;
    }

    margin-bottom: 10px;
  }
`;

const Burger = styled.svg`
  &:hover {
    path {
      stroke: var(--pop);
    }
  }
`;

const SmallScreenMenu = styled.div`
  background: white;
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 2;

  padding: 2rem;

  nav details {
    margin-bottom: 3rem;
    font-size: var(--h4);
  }

  nav details ul li {
    margin-bottom: 1rem;

    a {
      color: var(--black);
      text-decoration: none;
    }
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const Container = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

export function Layout({ children }) {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <>
      <Header>
        <Link to={"/"}>
          <div id="logo">
            <img id="logo-image" src={logo} />
            <span>LOGO</span>
          </div>
        </Link>
        <div className="hamburger">
          <Burger
            onClick={() => setMenu(!isMenuOpen)}
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1H16.5"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 13H17"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Burger>
        </div>
        <nav>
          <Link to={"/"}>Docs</Link>
          <Link to={"/"}>About</Link>
        </nav>
      </Header>
      <div className="layout">
        <TOC></TOC>
        {isMenuOpen && (
          <>
            <SmallScreenMenu className="small-menu">
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
            </SmallScreenMenu>
            <Container>{children}</Container>
          </>
        )}
        {!isMenuOpen && children}
      </div>
      <footer>
        <span>&copy; 2021 Documentation Site</span>
      </footer>
    </>
  );
}
