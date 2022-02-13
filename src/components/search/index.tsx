import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import * as style from "./style";
function Search({}) {
  const [searchUser, setSearchUser] = useState("");
  return (
    <>
      <style.Container>
        <input
          type="text"
          placeholder="digite seu nome de usuário"
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <BsSearch className="icon" />
      </style.Container>
    </>
  );
}

export default Search;
