"use client";
import { createContext, useState, ContextType } from "react";
const Context = createContext<ContextType | null>(null);

function ContextProvider({ children }) {
  const [userLogin, setUserLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [userProfileInfo, setUserProfileInfo] = useState(null);

  return (
    <Context.Provider
      value={{
        userLogin,
        setUserLogin,
        token,
        setToken,
        userProfileInfo,
        setUserProfileInfo,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
