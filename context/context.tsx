"use client";
import { createContext, useState, ContextType } from "react";
import { Lodging } from "./type";
const Context = createContext<ContextType | null>(null);
function ContextProvider({ children }: { children: any }) {
  const [userLogin, setUserLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [userProfileInfo, setUserProfileInfo] = useState(null);
  const [selectLogin, setSelectLogin] = useState<Lodging | null>(null);

  return (
    <Context.Provider
      value={{
        userLogin,
        setUserLogin,
        token,
        setToken,
        userProfileInfo,
        setUserProfileInfo,
        selectLogin,
        setSelectLogin,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
