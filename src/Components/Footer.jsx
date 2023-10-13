import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{ width: "100%", height: "400px" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="footer d-flex justify-content-evenly w-100 ">
        <div style={{ width: "290px" }}>
          <h5  className="mb-3">
            <i className="fa-solid fa-cloud-arrow-up "></i> Media Player
          </h5>
          <h6>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors
          </h6>
          <h6 className="text-dark">Code licensed MIT, docs CC BY 3.0.</h6>
          <h6 className="text-dark">Currently v5.3.2.</h6>
        </div>

        <div className="d-flex flex-column">
          <h5 className="mb-3"> Links</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            {" "}
            Landing Page
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            {" "}
            Home
          </Link>
          <Link
            to={"/watch-history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Watch-History
          </Link>
        </div>
        <div className="d-flex flex-column">
          <h5  className="mb-3"> Guides</h5>
          <Link
            to={"https://react-bootstrap.github.io/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            React Bootsrap
          </Link>
          <Link
            to={"https://www.npmjs.com/package/react-router-dom"}
            style={{ textDecoration: "none", color: "white" }}
          >
            {" "}
            React Router Dom
          </Link>
          <Link
            to={"https://fontawesome.com/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Icons
          </Link>
          <Link
            to={"https://bootswatch.com/cyborg/"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Themes
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <p>Copyright © 2023 Media Player. Built with React.</p>
      </div>
    </div>
  );
}

export default Footer;
