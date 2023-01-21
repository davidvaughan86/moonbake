import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  return (
    <div style={{ textAlign: "right" }} id="nav">
      <a style={{ textDecoration: "none" }} href="#bottom-of-page">
        {" "}
        <ShoppingCartIcon /> Order
      </a>
    </div>
  );
};

export default Nav;
