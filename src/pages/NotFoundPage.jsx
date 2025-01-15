import { Fragment } from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Fragment>
      <p>Page Not Found</p>
      <Link to="/">
        <button>Go to Homepage</button>
      </Link>
    </Fragment>
  );
}

export default NotFoundPage;
