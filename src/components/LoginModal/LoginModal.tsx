import React from "react";
import * as style from "./style";
type Props = {
  userReceive: Object;
};
function LoginModal({ userReceive }: Props) {
  return (
    <style.Container>
      <style.Img src={userReceive.avatar_url} />
      <style.Name>{userReceive.name}</style.Name>
      <style.Login>{userReceive.login}</style.Login>
      <style.Infos>
        <style.Id>
          <h3>Id </h3> <h2>{userReceive.id}</h2>
        </style.Id>
        <style.Repos>
          <h3> Repos</h3> <h2>{userReceive.public_repos}</h2>
        </style.Repos>
      </style.Infos>
      <style.Branding>
        <style.Followers>
          <h3> Followers </h3>
          <h2> {userReceive.followers}</h2>
        </style.Followers>
        <style.Following>
          <h3>Following</h3> <h2> {userReceive.following}</h2>
        </style.Following>
      </style.Branding>
      <style.Bio>{userReceive.bio}</style.Bio>
    </style.Container>
  );
}

export default LoginModal;
