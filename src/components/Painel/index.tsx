import React from "react";
import * as style from "./style";
import Search from "../search/index";
import Profile from "../profile/index";

function Painel() {
  return (
    <style.Container>
      <Search />
      <Profile />
    </style.Container>
  );
}
export default Painel;
