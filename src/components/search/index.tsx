import React from "react";
import { BsSearch } from "react-icons/bs";
import * as style from "./style";
function Search() {
  return (
    <>
      <style.Container>
        <input type="text" placeholder="digite seu nome de usuário" />
        <BsSearch className="icon" />
      </style.Container>
    </>
  );
}

export default Search;
