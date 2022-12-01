import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Image } from '@chakra-ui/react';
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
        <Image rounded={'full'} boxSize='40px' src={picture} alt={givenName} />
        <LogoutButton />
      </Flex>
    );
  }

  return <LoginButton />;
}
