import { useAuth0 } from '@auth0/auth0-react';
import { Box, Flex, Image,Link,Button, Stack } from '@chakra-ui/react';
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
      <>
      <Flex display={['none','none','flex','flex']}>
        <Flex gap={5}>
          <Link><Image rounded={'full'} boxSize='40px' src={picture} alt={givenName} /></Link>
          <LogoutButton />
        </Flex>
      </Flex>
      <Flex display={['flex','flex','none','none']}>
        <Stack align={'center'}>
          <LogoutButton />
          <Link><Image rounded={'full'} boxSize='40px' src={picture} alt={givenName} /></Link>
        </Stack>
      
      </Flex>
      </>
      
    );
  }

  return <LoginButton />;
}
