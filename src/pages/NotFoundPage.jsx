import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

function NotFoundPage() {

  return (
    <div className="base-container plain-border">
      <Header className="header" />
      <div className="centered-text">
      <p>Oops! We can&apos;t find the page you&apos;re looking for.</p>
      </div>
      <Footer className="footer" />
    </div>
  );
}

export default NotFoundPage;
