import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Image,Link,Button } from '@chakra-ui/react';
import { Link as ReactLink } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function AuthenticationButton() {
  const {
    isAuthenticated,
    user,
  } = useAuth0();

  if (isAuthenticated) {
    const { picture, givenName } = user;
    return (
      <Flex gap={5}>
        <Link as={ReactLink} to='/profile'><Image rounded={'full'} boxSize='40px' src={picture} alt={givenName} /></Link>
        <LogoutButton />
      </Flex>
    );
  }

  return <LoginButton />;
}
