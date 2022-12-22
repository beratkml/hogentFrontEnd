import axios from 'axios';
import {
  useAuth0
} from '@auth0/auth0-react';
import {
  useCallback
} from 'react';

const baseurl = `${process.env.REACT_APP_API_URL}/api/users`;

const useMangas = () => {
  const {
    user,
    getAccessTokenSilently
  } = useAuth0();

  const getUser = useCallback(async () => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${baseurl}/${user.nickname}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }, [getAccessTokenSilently,user]);

  return {
    getUser,
  }
}

export default useMangas;