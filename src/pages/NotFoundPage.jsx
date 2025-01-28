import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="base-container">
      <div className="centered-text">
        <p>Oops! We can&apos;t find the page you&apos;re looking for.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default NotFoundPage;
