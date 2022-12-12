import { Spinner,Box,Heading,Center } from '@chakra-ui/react'
export default function Loader({ loading }) {
  if (loading) {
    return (
      <>
      <Box marginTop={40}>
      <Heading align={'center'}>Mangaverz</Heading>
      <Center>
        <Spinner/>
      </Center>
    </Box>
      </>
    );
  }

  return null;
}