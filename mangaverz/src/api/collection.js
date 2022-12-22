import axios from 'axios';
import {
  useAuth0
} from '@auth0/auth0-react';
import {
  useCallback
} from 'react';

const baseurl = `${process.env.REACT_APP_API_URL}/api/collections`;

const useCollections = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();

  const getAllCollection = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(baseurl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  }, [getAccessTokenSilently])

  const getAndFilterCollectionById = useCallback(async (id) => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${baseurl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  }, [getAccessTokenSilently])

  const saveAction = useCallback(async (manga) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...data
    } = manga;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: baseurl,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }, [getAccessTokenSilently])

  const deleteCollectionById = useCallback(async (id) => {
    await axios.delete(`${baseurl}/${id}`);
  }, [])

  return {
    getAllCollection,
    deleteCollectionById,
    saveAction,
    getAndFilterCollectionById
  }
}

export default useCollections;