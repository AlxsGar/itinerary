import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
  onSelectPage: (pageSelected) => {},
  currentPageState: 0,
});

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPageState, setCurrentPageState] = useState(0);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggeIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const pageState = (pageSelected) => {
    setCurrentPageState(pageSelected)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        onSelectPage: pageState,
        currentPageState: currentPageState,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext