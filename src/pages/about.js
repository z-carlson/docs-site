import React from "react";
import { Layout } from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO title={"About"} />
      <Layout>
        <main>
          <h1>About</h1>
          <p>
            This is an example project created by{" "}
            <a href="http://www.zachary-carlson.com">Zachary Carlson.</a>
          </p>
          <p>
            I was a bit frustrated by some fo the limitations of using
            traditional authoring tools for techincal content, such as Adobe
            FrameMaker and MadCap Flare, so I decided to see what it would take
            to build something with the tools I like using: Gatsby, React, and
            Markdown.
          </p>
        </main>
      </Layout>
    </>
  );
}
