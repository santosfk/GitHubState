import React, { useState } from "react";
import * as style from "./style";
import ModalSkills from "../modalSkills/index"; //adicionar modal
import { useNavigate } from "react-router-dom";
type Props = {
  src: string;
  name: string;
  repo: Number;
  followers: Number;
  bio: string;
};

function Card({ src, name, repo, followers, bio }: Props) {
  const Navigation = useNavigate();

  const handleChangeRoute = (route: any) => {
    Navigation(`/${route}`);
  };
  const [modalSkills, setModalSkills] = useState<Boolean>(false);
  return (
    <>
      <style.Container>
        {modalSkills && <ModalSkills ModalOn={setModalSkills} />}
        <style.Picture src={src} />
        <style.Name>{name}</style.Name>
        <style.Infos>
          <style.Content>
            <h1>repositórios</h1>
            <h2>{repo}</h2>
          </style.Content>
          <style.Content>
            <h1>seguidores</h1>
            <h2>{followers}</h2>
          </style.Content>
        </style.Infos>
        <style.Info onClick={() => handleChangeRoute("mypacks")}>
          Add In Pack
        </style.Info>
        <style.MoreSkills onClick={() => setModalSkills(true)}>
          More skills
        </style.MoreSkills>
      </style.Container>
    </>
  );
}
export default Card;
