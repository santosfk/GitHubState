import React from "react";
import * as style from "./style";
type Props = {
  ModalOn: React.Dispatch<Boolean>;
  src: string;
  name: string;
  repo: Number;
  followers: Number;
  bio: string;
};

const ModalSkills = ({ ModalOn, src, name, repo, followers, bio }: Props) => {
  return (
    <style.Container>
      <style.Title>{name}</style.Title>
      <style.Bio>{bio}</style.Bio>
      <style.Skills>
        <style.Repo>Repositórios : {repo}</style.Repo>
        <style.Followers> Seguidores : {followers} </style.Followers>
      </style.Skills>

      <button onClick={() => ModalOn(false)}>fechar</button>
    </style.Container>
  );
};

export default ModalSkills;
