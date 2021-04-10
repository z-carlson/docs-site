import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { TOC } from "./TOC";
import styled from "styled-components";
import { toc } from "../content/toc.yaml";
import logo from "../assets/logo.svg";
import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";
import { ThemeContext } from "../utils/ThemeContext";

const Header = styled.header`
  position: relative;
  padding-bottom: 1rem;

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
  path {
    stroke: var(--black);
  }

  &:hover {
    path {
      stroke: var(--pop);
    }
  }
`;

const Close = styled.svg`
  stroke-width: 3;
  stroke: var(--pop);

  animation: 0.3s ease-out spin;

  @keyframes spin {
    from {
      transform: rotate(180deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
  }
`;

const SmallScreenMenu = styled.div`
  background: var(--white);
  width: 100%;
  height: 80vh;
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 2;

  animation: 0.3s ease-out slideIn;

  @keyframes slideIn {
    from {
      left: -200px;
      opacity: 0;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }

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

const MainNavBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
  margin-bottom: 5rem;
  border-bottom: 1px solid var(--accent);
  a {
    text-decoration: none;
    color: var(--textColor);
  }

  a span {
    text-transform: uppercase;
  }
`;

const Container = styled.div`
  display: block;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ThemeToggle = styled.div`
  padding-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-end;

  img {
    height: 20px;
  }

  img:hover {
    cursor: pointer;
  }

  @media (max-width: 600px) {
    img {
      height: 15px;
    }
  }
`;

export function Layout({ children }) {
  const [isMenuOpen, setMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === "dark" ? (
        <ThemeToggle onClick={() => setTheme("light")}>
          <img src={sun} alt="light mode" />
        </ThemeToggle>
      ) : (
        <ThemeToggle onClick={() => setTheme("dark")}>
          <img src={moon} alt="dark mode" />
        </ThemeToggle>
      )}
      <Header>
        <Link to={"/"}>
          <div id="logo">
            <img id="logo-image" src={logo} alt="logo" />
            <span>Docs Template</span>
          </div>
        </Link>
        <div className="hamburger">
          {isMenuOpen ? (
            <Close
              onClick={() => setMenu(!isMenuOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </Close>
          ) : (
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
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1H16.5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 13H17"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Burger>
          )}
        </div>
        <nav>
          <Link to={"/about"}>About</Link>
        </nav>
      </Header>
      <div className="layout">
        <TOC></TOC>
        {isMenuOpen && (
          <>
            <SmallScreenMenu className="small-menu">
              <MainNavBar>
                <Link to={"/"}>
                  <span>Home</span>
                </Link>
                <Link to={"/about"}>
                  <span>About</span>
                </Link>
              </MainNavBar>
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
            </SmallScreenMenu>
            <Container>{children}</Container>
          </>
        )}
        {!isMenuOpen && children}
      </div>
      {!isMenuOpen && (
        <footer>
          <span>&copy; 2021 Documentation Site</span>
        </footer>
      )}
    </>
  );
}
