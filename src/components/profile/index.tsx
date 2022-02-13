import React from "react";
import * as style from "./style";

function Profile() {
  return (
    <>
      <style.Container>
        <style.Picture>
          <img src="" alt="" />
        </style.Picture>
        <style.Name>armando</style.Name>
        <style.Characteristics>
          <style.BlockChar>
            <h1>repositórios</h1>
            <h2>{25}</h2>
          </style.BlockChar>
          <style.BlockChar>
            <h1>seguidores</h1>
            <h2>{30}</h2>
          </style.BlockChar>
        </style.Characteristics>
        <style.Bio>sou um programador que programa programas</style.Bio>
      </style.Container>
    </>
  );
}

export default Profile;
