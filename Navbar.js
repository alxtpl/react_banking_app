function Navbar({ page, onNavigate }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        Banking App
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={`nav-item ${page === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
            title="Home Page"
          >
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li
            className={`nav-item ${page === "createAccount" ? "active" : ""}`}
            onClick={() => onNavigate("createAccount")}
            title="Create Account Page"
          >
            <a className="nav-link" href="#">
              Create Account
            </a>
          </li>
          <li
            className={`nav-item ${page === "deposit" ? "active" : ""}`}
            onClick={() => onNavigate("deposit")}
            title="Deposit Page"
          >
            <a className="nav-link" href="#">
              Deposit
            </a>
          </li>
          <li
            className={`nav-item ${page === "withdraw" ? "active" : ""}`}
            onClick={() => onNavigate("withdraw")}
            title="Withdraw Page"
          >
            <a className="nav-link" href="#">
              Withdraw
            </a>
          </li>
          <li
            className={`nav-item ${page === "allData" ? "active" : ""}`}
            onClick={() => onNavigate("allData")}
            title="All Data Page"
          >
            <a className="nav-link" href="#">
              All Data
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
