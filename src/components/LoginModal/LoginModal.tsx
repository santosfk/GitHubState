import React from "react";
import * as style from "./style";
type Props = {
  userReceive: Object;
};
function LoginModal({ userReceive }: Props) {
  return (
    <style.Container>
      <style.Img src={userReceive.avatar_url} />
      <style.Name>{userReceive.name}</style.Name>,
      <style.Login>{userReceive.login}</style.Login>
    </style.Container>
  );
}

export default LoginModal;
