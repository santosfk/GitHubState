import React, { useState, useRef } from "react";

function Me() {
  const userRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const [userReceive, setUserReceive] = useState("");

  const Logar = () => {
    console.log(userRef.current?.value);
    console.log(nameRef.current?.value);
  };
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
