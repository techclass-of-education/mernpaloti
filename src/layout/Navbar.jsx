import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/list">
            Incidents
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" 
                      to="/add">
                  Add Indcidents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/details">
                  Incidents Details
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
             
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                 
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/profile">
                     Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/change">
                     Change Password
                    </Link>
                  </li>
                 
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
