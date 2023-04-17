import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Golb Aidnaltrop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts-new">
                  New Post
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts-index">
                  All Posts
                </a>
              </li>
              <li className="nav-item">
                <LogoutLink />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
