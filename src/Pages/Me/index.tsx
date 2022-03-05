import React, { useState, useRef, useEffect } from "react";
import client from "../../services/client";
import LoginModal from "../../components/LoginModal/LoginModal";
import * as style from "./style";
function Me() {
  const [userReceive, setUserReceive] = useState<React.SetStateAction<Object>>(
    {}
  );
  const [modalOn, setModalOn] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const Logar = async () => {
    try {
      const Response = await client.get(`/${userRef.current?.value}`);
      setUserReceive(Response.data);
      if (userReceive?.name === nameRef.current?.value) [setModalOn(true)];
    } catch {
      alert("seu usuario está incorreto");
    }
  };
  console.log(userReceive);
  console.log(modalOn);

  return (
    <style.Container>
      {modalOn && <LoginModal userReceive={userReceive} />}
      <style.Content>
        <style.Title>Faça Seu Login </style.Title>
        <style.InputContent>
          <style.User
            type="text"
            placeholder="digite seu usuário no github"
            ref={userRef}
          />
          <style.Name
            type="text"
            placeholder="digite seu nome no github"
            ref={nameRef}
          />
        </style.InputContent>
        <button onClick={Logar}> logar</button>
      </style.Content>
    </style.Container>
  );
}

export default Me;
