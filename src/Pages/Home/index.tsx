import React, { useContext } from "react";
import Card from "../../components/card/index";
import Search from "../../components/search";
import Header from "../../components/header";
import { context } from "../../context";
function Home() {
  const receiveData: any = useContext(context);
  console.log(receiveData);
  const src: string = receiveData.userData.avatar_url;
  const name: string = receiveData.userData.name;
  const repo: Number = receiveData.userData.public_repos;
  const followers: Number = receiveData.userData.followers;
  const bio: string = receiveData.userData.bio;
  return (
    <>
      <Header />
      <Search />
      {name && (
        <Card
          src={src}
          name={name}
          repo={repo}
          followers={followers}
          bio={bio}
        />
      )}
      ;
    </>
  );
}

export default Home;
