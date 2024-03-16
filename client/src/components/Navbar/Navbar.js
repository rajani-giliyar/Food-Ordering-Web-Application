import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = {
    backgroundColor: "lightgray",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "10px 15px",
    borderBottom: "1px solid #ccc",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const para = {
    padding: "0px 10px",
  };

  const link = {
    textDecoration: "none",
  };

  return (
    <div style={pages}>
      <p style={para}>Already Registered?</p>
      <Link style={link} to="/login">
        {" "}
        Login{" "}
      </Link>
      <p style={para}>here</p>
    </div>
  );
};

export default Navbar;
