import { API_URL } from './settings';
import { API_AUTH } from '@env';

async function getPopularMovies(
  page: number = 1,
): Promise<PopularMoviesResult> {
  try {
    const url = `${API_URL}movie/popular?api_key=${API_AUTH}&page=${page}`;
    const response = await fetch(url);
    const result: PopularMoviesResult = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export default getPopularMovies;
