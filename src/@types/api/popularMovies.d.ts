type PopularMoviesResult = {
  page: number;
  results: cardMovie[];
  total_pages: number;
  total_results: number;
  success: boolean;
};

type MovieCardType = {
  id: number;
  poster_path: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};
