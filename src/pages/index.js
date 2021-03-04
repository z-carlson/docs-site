import { Link } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout.js";
import SEO from "../components/SEO.js";

export default function ProductLanding() {
  return (
    <>
      <SEO title="Welcome" />
      <Layout>
        <main>
          <h1>Welcome to the Docs Template Site</h1>
          <div className="card-container">
            <div className="card">
              <Link to={"/get-started/overview"}>
                <h3>Getting Started</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Link>
            </div>
            <div className="card">
              <Link to={"/tutorials/overview"}>
                <h3>Tutorials</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Link>
            </div>
            <div className="card">
              <Link to={"/how-to/overview"}>
                <h3>How-to Guides</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Link>
            </div>
            <div className="card">
              <Link to={"/reference/overview"}>
                <h3>Reference</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
