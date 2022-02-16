import React, { useContext, useEffect } from "react";
import * as style from "./style";
import Search from "../search/index";
import Profile from "../profile/index";
import { context } from "../../context";
function Painel() {
  const receiveData: any = useContext(context);
  const src: string = receiveData.userData.avatar_url;
  const name: string = receiveData.userData.name;
  const repo: Number = receiveData.userData.public_repos;
  const followers: Number = receiveData.userData.followers;
  const bio: string = receiveData.userData.bio;
  return (
    <style.Container>
      <Search />
      <Profile
        src={src}
        Name={name}
        Repo={repo}
        Followers={followers}
        Bio={bio}
      />
    </style.Container>
  );
}
export default Painel;
