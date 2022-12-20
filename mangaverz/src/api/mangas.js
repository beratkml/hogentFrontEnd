import axios from 'axios';
import {
  useAuth0
} from '@auth0/auth0-react';
import {
  useCallback
} from 'react';

const baseurl = `${process.env.REACT_APP_API_URL}/api/mangas`;

const useMangas = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();

  const getAllManga = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(baseurl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  }, [getAccessTokenSilently])

  const getMangaById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${baseurl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }, [getAccessTokenSilently]);

  const saveAction = useCallback(async (manga) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...data
    } = manga;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: `${baseurl}/${id?id:""}`,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }, [getAccessTokenSilently])

  const deleteMangaById = useCallback(async (id) => {
    await axios.delete(`${baseurl}/${id}`);
  }, [])

  return {
    getAllManga,
    deleteMangaById,
    saveAction,
    getMangaById,
  }
}

export default useMangas;