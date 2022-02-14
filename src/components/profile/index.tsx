import React, { useContext, useState } from "react";
import * as style from "./style";
import { context } from "../../context";
type Props = {
  src: string;
  Name: string;
  Repo: Number;
  Followers: Number;
  Bio: string;
};
function Profile({ src, Name, Repo, Followers, Bio }: Props) {
  return (
    <>
      <style.Container>
        <style.Picture src={src}></style.Picture>
        <style.Name>{Name}</style.Name>
        <style.Characteristics>
          <style.BlockChar>
            <h1>repositórios</h1>
            <h2>{Repo}</h2>
          </style.BlockChar>
          <style.BlockChar>
            <h1>seguidores</h1>
            <h2>{Followers}</h2>
          </style.BlockChar>
        </style.Characteristics>
        <style.Bio>{Bio}</style.Bio>
      </style.Container>
    </>
  );
}

export default Profile;
