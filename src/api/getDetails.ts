import { API_URL } from './settings';
import { API_AUTH } from '@env';

async function getDetails(id: number): Promise<MovieDetails> {
  try {
    const url = `${API_URL}movie/${id}?api_key=${API_AUTH}`;
    const response = await fetch(url);
    const result: MovieDetails = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export default getDetails;
