import React, { createContext, useState } from "react";

export const context = createContext({});

export const ContextProvider = (props: any) => {
  const [userData, setUserData] = useState({});

  return (
    <context.Provider value={{ userData, setUserData }}>
      {props.children}
    </context.Provider>
  );
};
