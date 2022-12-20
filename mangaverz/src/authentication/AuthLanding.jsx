import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardBody, CardFooter, CardHeader, Center, Spacer, Text } from '@chakra-ui/react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Error from '../components/Error';
import LoginButton from './LoginButton';

export default function AuthLanding() {
  const { error, isAuthenticated, isLoading } = useAuth0();

  if (error) {
    <Center>
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Login failed</h1>
          <p>
            Sorry, we were unable to sign you in, the error below might be useful.
          </p>
          <Error error={error} />
          <LoginButton />
        </div>
      </div>
    </div>
    </Center>

  }

  if (!isLoading && isAuthenticated) {
    return <Navigate to="/manga" />;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <>
      <Navbar/>
      <Center>
        <Card>
          <CardHeader>Login required</CardHeader>
          <CardBody>
            <Text>You need to login to access this page.</Text>
            <Spacer/>
            <CardFooter>
            <LoginButton />
            </CardFooter>
          </CardBody>
        </Card>
      </Center>
      </>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Signing in</h1>
          <p>
            Please wait while we sign you in!
          </p>
        </div>
      </div>
    </div>
  );
}
