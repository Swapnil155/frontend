import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthService from "../services/Auth.service";

const Navbar = () => {
  const [isActive, setIsActive] = useState(1);
  const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setUserInfo(user);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
  };

  // console.info(userInfo.userData.email)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow d-print-none">
        <div className="container-fluid mx-3">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            Directory
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  onClick={() => setIsActive(1)}
                  className={
                    isActive === 1
                      ? "nav-link fw-bold active"
                      : "nav-link fw-bold text-muted"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setIsActive(2)}
                  className={
                    isActive === 2
                      ? "nav-link fw-bold active"
                      : "nav-link fw-bold text-muted"
                  }
                  aria-current="page"
                  to="/contact"
                >
                  contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={() => setIsActive(3)}
                  className={
                    isActive === 3
                      ? "nav-link fw-bold active"
                      : "nav-link fw-bold text-muted"
                  }
                  aria-current="page"
                  to="/Blog"
                >
                  Blog
                </NavLink>
              </li>
              {userInfo ? (
                <>
                  <li className="nav-item dropdown ms-lg-3">
                    <NavLink
                      className
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      data-bs-display="static"
                      aria-expanded="false"
                    >
                      <img
                        className="avatar avatar-sm avatar-border-white me-2"
                        src="https://d19m59y37dris4.cloudfront.net/directory/2-0-1/img/avatar/avatar-10.jpg"
                        alt="Jack London"
                      />
                    </NavLink>
                    <ul
                      className="dropdown-menu dropdown-menu-end border-0"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item Link" to="/Account">
                          Account
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item Link" to="/Booking">
                          Booking's
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item Link" to="/Wishlist">
                          Whishlist
                        </Link>
                      </li>
                      <div className="dropdown-divider" />
                      <Link
                        onClick={logout}
                        className="dropdown-item Link"
                        to="/signIn"
                      >
                        sign out
                      </Link>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      onClick={() => setIsActive(4)}
                      className={
                        isActive === 4
                          ? "nav-link fw-bold active"
                          : "nav-link fw-bold text-muted"
                      }
                      aria-current="page"
                      to="/signIn"
                    >
                      Sign in
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      onClick={() => setIsActive(5)}
                      className={
                        isActive === 5
                          ? "nav-link fw-bold active"
                          : "nav-link fw-bold text-muted"
                      }
                      aria-current="page"
                      to="/signUp"
                    >
                      Sign up
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
