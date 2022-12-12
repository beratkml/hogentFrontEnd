import axios from 'axios';
import {
  useAuth0
} from '@auth0/auth0-react';
import {
  useCallback
} from 'react';

const MANGAURL = 'http://localhost:9000/api/mangas';

const useMangas = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();

  const getAllManga = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(MANGAURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  }, [getAccessTokenSilently])

  const getMangaById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${MANGAURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  }, [getAccessTokenSilently]);

  const saveAction = useCallback(async (manga) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...data
    } = manga;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: MANGAURL,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }, [getAccessTokenSilently])

  const deleteMangaById = useCallback(async (id) => {
    await axios.delete(`${MANGAURL}/${id}`);
  }, [])

  return {
    getAllManga,
    deleteMangaById,
    saveAction,
    getMangaById
  }
}

export default useMangas;