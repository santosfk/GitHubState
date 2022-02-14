import React, { useContext } from "react";
import * as style from "./style";
import Search from "../search/index";
import Profile from "../profile/index";
import { context } from "../../context";
function Painel() {
  const receiveData: any = useContext(context);
  return (
    <style.Container>
      <Search />
      <Profile
        src={receiveData.userData.avatar_url}
        Name={receiveData.userData.name}
        Repo={receiveData.userData.public_repos}
        Followers={receiveData.userData.followers}
        Bio={receiveData.userData.bio}
      />
    </style.Container>
  );
}
export default Painel;
