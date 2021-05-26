import React, { useState } from "react";

const Context = React.createContext({});

export function ManifestsContextProvider({ children }) {
  const [manContext, setManContext] = useState(null);

  return (
    <Context.Provider value={{ manContext, setManContext }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
