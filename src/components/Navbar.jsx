import React from 'react'

const Navbar = ({dark , changeTheme}) => {
  return (
    <nav className={
      dark ? "navbar bg-dark shadow-lg" : "navbar bg-info shadow-lg"
    }>
    <div className="container-fluid">
    <span className="navbar-brand mb-0 h1 text-light">Khatabook-Props</span>
    <span className="navbar-brand mb-0 h1">
      <button className={
              dark ? "btn btn-sm btn-secondary" : "btn btn-sm btn-light"
            }
            onClick={changeTheme}
          >
            {dark ? "Light Mode" : "Dark Mode"}</button>
    </span>
    </div>
    </nav>
  )
};

export default Navbar;
