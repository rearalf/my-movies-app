/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import SearchMovieProvider from '@app/context/SearchMovieProvider';
import Navigation from '@app/navigation';
import React from 'react';

const App = () => {
  return (
    <SearchMovieProvider>
      <Navigation />
    </SearchMovieProvider>
  );
};

export default App;
