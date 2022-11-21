import axios from 'axios';
const GENREURL = 'http://localhost:9000/api/genres';

export const getAllGenres = async () => {
  const response = await axios.get(GENREURL);
  return response.data.items;
}