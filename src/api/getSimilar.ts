import { API_URL } from './settings';
import { API_AUTH } from '@env';

async function getSimilar(id: number): Promise<ListMoviesResult> {
  try {
    const url = `${API_URL}movie/${id}/similar?api_key=${API_AUTH}`;
    const response = await fetch(url);
    const result: ListMoviesResult = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export default getSimilar;
