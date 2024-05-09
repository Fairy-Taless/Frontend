// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext({});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [apiResponse, setApiResponse] = useState(null);

  return (
    <DataContext.Provider value={{ apiResponse, setApiResponse }}>
      {children}
    </DataContext.Provider>
  );
};
