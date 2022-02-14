import React, { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import * as style from "./style";
import client from "../../services/client";
import { context } from "../../context";
function Search({}) {
  const [searchUser, setSearchUser] = useState("");
  async function getUser() {
    try {
      const response = await client.get(`/${searchUser}`);
      receiveContext.setUserData(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const testando = () => {
    //função somente de teste
    console.log(" allo brasil");
  };
  const receiveContext: any = useContext(context);

  return (
    <>
      <style.Container>
        <input
          type="text"
          placeholder="digite seu nome de usuário"
          onChange={(e) => setSearchUser(e.target.value)}
        />
        <BsSearch className="icon" onClick={getUser} />
      </style.Container>
    </>
  );
}

export default Search;
