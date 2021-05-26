import React, { useState } from "react";

const Context = React.createContext({});

export function PendingContextProvider({ children }) {
  const [pendingContext, setPendingContext] = useState([]);

  return (
    <Context.Provider value={{ pendingContext, setPendingContext }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
