import React, { createContext, useState, useContext, useEffect } from "react";

interface InputContextProps {
  searchText: string;
  searchResults: {
    id: string;
    title: string;
  }[];

  updateSearchText: (text: string) => void;
}

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad537abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-ftbdu91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145y571e29d72",
    title: "Third Item",
  },
  {
    id: "xxxx-c1b1-46c2-aed5-3ad53abb2p8ba1",
    title: "Forth Item",
  },
  {
    id: "xxxx-c1b1-46c2-aed5-3aud53abb28ba1",
    title: "Fifth Item",
  },
  {
    id: "xxxx-c1bdd1-46c2-aed5-3ad53iabb28ba1",
    title: "Six Item",
  },
  {
    id: "xxxx-c1b1-46c2-aeppd5-3ad53abb28boa1",
    title: "Seventh Item",
  },
  {
    id: "xxxx-c1b1-46c2-aed5-3ad53aboob28boa1",
    title: "Forth Item",
  },
  {
    id: "xxxx-c1b1-46c2-aed5-ii",
    title: "Forth Item",
  },
  {
    id: "xxxx-c1b1-46c2-aed5-3aduu53abb2o8ba1",
    title: "Forth Item",
  },
];

const InputContext = createContext<InputContextProps | undefined>(undefined);

export const InputProvider = ({ children }: { children: JSX.Element }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  }, [searchText]);

  const updateSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <InputContext.Provider
      value={{ searchText, updateSearchText, searchResults }}
    >
      {children}
    </InputContext.Provider>
  );
};

export const useInput = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInput must be used within an InputProvider");
  }
  return context;
};
