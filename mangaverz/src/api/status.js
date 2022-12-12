import axios from 'axios';
import {
  useAuth0
} from '@auth0/auth0-react';
import {
  useCallback
} from 'react';

const STATUSURL = 'http://localhost:9000/api/status';

const useStatus = () => {
  const {
    getAccessTokenSilently
  } = useAuth0();

  const getAllStatuses = useCallback(async () => {
    const response = await axios.get(STATUSURL, {});
    return response.data.items;
  }, [])

  const saveAction = useCallback(async (manga) => {
    const token = await getAccessTokenSilently();
    const {
      id,
      ...data
    } = manga;
    await axios({
      method: id ? 'PUT' : 'POST',
      url: STATUSURL,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }, [getAccessTokenSilently])


  return {
    getAllStatuses,
    saveAction
  }
}

export default useStatus;