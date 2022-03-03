import React, { useState, useRef, useEffect } from "react";
import client from "../../services/client";
import * as style from "./style";
function Me() {
  const [userReceive, setUserReceive] = useState<Object>({});
  const [modalOn, setModalOn] = useState(false);
  const userRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const Logar = async () => {
    try {
      const Response = await client.get(`/${userRef.current?.value}`);
      setUserReceive(Response?.data);
    } catch {
      alert("seu usuario está incorreto");
    }
  };
  console.log(userReceive);
  console.log(modalOn);
  {
    userReceive?.name === nameRef.current?.value
      ? setModalOn(true)
      : setModalOn(false);
  }
  return (
    <>
      <h1>Make Your Login </h1>
      <input
        type="text"
        placeholder="digite seu usuário no github"
        ref={userRef}
      />
      <input
        type="text"
        placeholder="digite seu nome no github"
        ref={nameRef}
      />

      <button onClick={Logar}> logar</button>
    </>
  );
}

export default Me;
