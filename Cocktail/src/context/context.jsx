import { useState, createContext } from "react";
import useFetch from "../hooks/useFetch.js";
const AppContext = createContext();

function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [query, setQuery] = useState("spritz");
  const { isLoading, data, isError, count } = useFetch(`s=${query}`);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const searchCocktail = (input) => {
    setQuery(input);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        query,
        isLoading,
        data,
        isError,
        count,
        searchCocktail
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
