import React from "react";
import * as style from "./style";
type Props = {
  ModalOn: React.Dispatch<React.SetStateAction<Boolean>>;
};
const ModalSkills = ({ ModalOn }: Props) => {
  return (
    <style.Container>
      alo
      <button onClick={() => ModalOn(false)}>fechar</button>
    </style.Container>
  );
};

export default ModalSkills;
