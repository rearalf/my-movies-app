import React, { useState } from 'react';
import { DefaultDialogContext } from './DefaultState';
import SearchMovieContext from './SearchMovieContext';

interface porpsInterface {
  children: JSX.Element | JSX.Element[];
}

function SearchMovieProvider({ children }: porpsInterface) {
  const [searchMovieTab, setSearchMovieTab] = useState(
    DefaultDialogContext.searchMovieTab,
  );
  return (
    <SearchMovieContext.Provider value={{ searchMovieTab, setSearchMovieTab }}>
      {children}
    </SearchMovieContext.Provider>
  );
}

export default SearchMovieProvider;
