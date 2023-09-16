import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <h1 className="title">BeanThere</h1>
          <NavLink className="nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="nav__link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav__link" to="/register">
            Register
          </NavLink>
          <NavLink className="nav__link" to="/profile">
            Profile
          </NavLink>
          <NavLink className="nav__link" to="/messenger">
            Messenger
          </NavLink>
          <NavLink className="nav__link" to="/location">
            Location
          </NavLink>
          <NavLink className="nav__link" to="/search">
            Search
          </NavLink>
          <NavLink className="nav__link" to="/company">
            CompanyPage
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <span>&copy; Wingardium Levicode - BeanThere - 2023</span>
      </footer>
    </div>
  );
}
