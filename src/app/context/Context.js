import React, { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // change Theme on Click
  const [toggleDark, settoggleDark] = useState(false);
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  return (
    <Context.Provider value={{ toggleDark, settoggleDark, handleModeChange }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
