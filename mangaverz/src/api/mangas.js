import axios from 'axios';

export const getAllManga = async () => {
  const response = await axios.get('http://localhost:9000/api/mangas');
  return response.data.items;
}