import React from "react";
import * as style from "./style";
type Props = {
  ModalOn: React.Dispatch<Boolean>;
};

const ModalSkills = ({ ModalOn }: Props) => {
  return (
    <style.Container>
      <button onClick={() => ModalOn(false)}>fechar</button>
    </style.Container>
  );
};

export default ModalSkills;
