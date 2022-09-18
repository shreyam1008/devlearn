import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "sagar", balance: 400 });

  const increaseBalance = (value) => {
    setUser((prev) => {
      return { ...prev, balance: prev.balance + value };
    });
  };
  return (
    <UserContext.Provider value={{ user, setUser, increaseBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
