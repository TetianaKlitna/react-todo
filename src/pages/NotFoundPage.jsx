import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="base-container">
      <div className="centered-text">
        <p>Oops! We can&apos;t find the page you&apos;re looking for.</p>
        <Link to="/">
          <button>Go to Homepage</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
