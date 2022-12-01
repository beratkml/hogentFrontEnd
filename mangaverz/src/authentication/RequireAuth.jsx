import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router';
import Loader from '../components/Loader';

export default function RequireAuth({ children }) { // 👈 1
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) { // 👈 2
    return <Loader loading />;
  }

  if (isAuthenticated) { // 👈 3
    return children;
  }

  return <Navigate to="/login" />; // 👈 4
}
