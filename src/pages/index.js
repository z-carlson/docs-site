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
                  Welcome! Get started with setup, installation, and quick start
                  guides.
                </p>
              </Link>
            </div>
            <div className="card">
              <Link to={"/tutorials/overview"}>
                <h3>Tutorials</h3>
                <p>
                  New? These end-to-end walkthroughs will guide you through
                  common, real-world problems.
                </p>
              </Link>
            </div>
            <div className="card">
              <Link to={"/how-to/overview"}>
                <h3>How-to Guides</h3>
                <p>
                  How-to guides are short, step-by-step instructions on how to
                  complete a specific task.
                </p>
              </Link>
            </div>
            <div className="card">
              <Link to={"/reference/overview"}>
                <h3>Reference</h3>
                <p>Need to check the API or looking for something specific?</p>
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
