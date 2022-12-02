import axios from 'axios';
import {
  useAuth0
} from '@auth0/auth0-react';
import {
  useCallback
} from 'react';

const COLLECTIONURL = 'http://localhost:9000/api/collections';

const useCollections = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();

  const getAllCollection = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(COLLECTIONURL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data.items;
  }, [getAccessTokenSilently])

  const saveAction = useCallback(async (manga) => {
    const {
      id,
      ...data
    } = manga;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: COLLECTIONURL,
      data: data
    })
  }, [])

  const deleteCollectionById = useCallback(async (id) => {
    await axios.delete(`${COLLECTIONURL}/${id}`);
  }, [])

  return {
    getAllCollection,
    deleteCollectionById,
    saveAction
  }
}

export default useCollections;