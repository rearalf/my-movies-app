interface SearchMovieInterface {
  searchMovie: string;
  searchMovieState: boolean;
}

export const DialogComponentValue: SearchMovieInterface = {
  searchMovie: '',
  searchMovieState: false,
};

export const DefaultDialogContext = {
  searchMovieTab: DialogComponentValue,
  setSearchMovieTab: (state: SearchMovieInterface) => {},
};
