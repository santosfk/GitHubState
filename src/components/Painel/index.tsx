import React from "react";
import * as style from "./style";
import Search from "../search/index";
import Profile from "../profile/index";

function Painel() {
  return (
    <style.Container>
      <Search />
      <Profile
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Dev_Patel_%2829870651654%29.jpg/640px-Dev_Patel_%2829870651654%29.jpg"
        Name="samael"
        Repo={13}
        Followers={27}
        Bio="palavras nao bastam"
      />
    </style.Container>
  );
}
export default Painel;
