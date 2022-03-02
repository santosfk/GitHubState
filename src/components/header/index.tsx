import React from "react";
import * as style from "./style";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <style.Container>
        <Link to="me" className="link">
          <h1>Me</h1>
        </Link>
        <Link to="mypacks" className="link">
          <h1> Packs</h1>
        </Link>
      </style.Container>
    </>
  );
}

export default Header;
