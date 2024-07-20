import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });

  useEffect(() => {
    // 애플리케이션 시작 시 세션 스토리지 확인
    const token = sessionStorage.getItem("authToken");
    if (token) {
      setAuth({ token });
    }
  }, []);

  const login = (token) => {
    setAuth({ token });
    sessionStorage.setItem("authToken", token);
  };

  const logout = () => {
    setAuth({ token: null });
    sessionStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
