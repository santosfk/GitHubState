import React, { useContext } from "react";
import Card from "../card/index";
import Search from "../search";
import { context } from "../../context";
function Container() {
  const receiveData: any = useContext(context);
  console.log(receiveData);
  const src: string = receiveData.userData.avatar_url;
  const name: string = receiveData.userData.name;
  const repo: Number = receiveData.userData.public_repos;
  const followers: Number = receiveData.userData.followers;
  const bio: string = receiveData.userData.bio;
  return (
    <>
      <Search />
      <Card src={src} name={name} repo={repo} followers={followers} bio={bio} />
      ;
    </>
  );
}

export default Container;
