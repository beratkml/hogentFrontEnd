import axios from 'axios';

const MANGAURL = 'http://localhost:9000/api/mangas';
const GENREURL = 'http://localhost:9000/api/genres';

export const getAllManga = async () => {
  const response = await axios.get(MANGAURL);
  return response.data.items;
}

export const saveAction = async (manga) => {
  const {
    id,
    ...data
  } = manga;
  await axios({
    method: id ? 'PUT' : 'POST',
    url: MANGAURL,
    data: data
  })
}

export const getAllGenres = async () => {
  const response = await axios.get(GENREURL);
  return response.data.items;
}