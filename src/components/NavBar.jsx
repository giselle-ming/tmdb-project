import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

function NavBar() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const handleNavigateToSearch = () => {
    navigate("/search");
    return;
  };

  const handleNavigateHome = () => {
    navigate("/");
    return;
  };

  const handleNavigateMyList = () => {
    navigate("/mylist");
    return;
  };

  const pathname = window.location.pathname;

  const paths = ["/", "/mylist", "/search"];

  const currentPage = paths.map((path) => pathname === path);

  return (
    <div className={`nav-main-container ${show && "nav-black"}`}>
      <div className="nav-left-icons">
        <button onClick={handleNavigateHome} className="nav-left-icon nav-btns">
          Home
        </button>
        <button
          onClick={handleNavigateMyList}
          className="nav-left-icon nav-btns"
        >
          My Favorites
        </button>
      </div>
      <div className="nav-right-icons">
        <button
          onClick={handleNavigateToSearch}
          className="nav-btn-search nav-btns"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="17px"
            viewBox="0 0 512 512"
            style={{ fill: "white" }}
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      <HamburgerMenu />
    </div>
  );
}

export default NavBar;
