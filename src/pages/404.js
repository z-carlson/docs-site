import * as React from "react";
import { Link } from "gatsby";
import SEO from "../components/SEO";

// markup
const NotFoundPage = () => {
  return (
    <>
      <SEO title={"Not Found"} />
      <main>
        <h1>Page not found</h1>
        <p>
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? <></> : null}
          <br />
          <Link to="/">Go home</Link>.
        </p>
      </main>
    </>
  );
};

export default NotFoundPage;
