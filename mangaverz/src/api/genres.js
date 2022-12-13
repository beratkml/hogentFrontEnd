import axios from 'axios';
const baseurl = `${process.env.REACT_APP_API_URL}/genres`;

export const getAllGenres = async () => {
  const response = await axios.get(baseurl);
  return response.data.items;
}