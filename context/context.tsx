"use client";
import { createContext, useState, ContextType, useEffect } from "react";
import { Lodging, User } from "./type";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
const Context = createContext<ContextType | null>(null);
function ContextProvider({ children }: { children: any }) {
  const [userLogin, setUserLogin] = useState(null);
  const [token, setToken] = useState(null);
  const [userProfileInfo, setUserProfileInfo] = useState<User | null>(null);
  const [selectLogin, setSelectLogin] = useState<Lodging | null>(null);

  const logout = () => {
    setToken(null);
    setUserLogin(null);
    setUserProfileInfo(null);
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        try {
          const decodedToken: any = jwtDecode(savedToken);
          setToken(savedToken);
          console.log(decodedToken);
          setUserLogin(decodedToken);
          console.log(userLogin);
        } catch (error) {
          logout();
        }
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);

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
