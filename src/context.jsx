import React, { useContext, useState } from "react";
import useFetch from "./hooks/useFetch";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const { isLoading, error, movies } = useFetch(search);
  return (
    <AppContext.Provider
      value={{ setSearch, search, isLoading, error, movies }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
