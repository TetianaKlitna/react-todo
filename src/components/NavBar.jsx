import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/new">Create Todo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
