import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const SearchText = SearchContext;
export default SearchContextProvider;
