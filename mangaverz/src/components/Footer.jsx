import { Box,Container, Text,Stack } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";
import {MoonIcon,SunIcon} from '@chakra-ui/icons'
import {Link} from '@chakra-ui/react'
export default function Footer(){

  return (
    <>
    <Box position={'absolute'} left={'0'} bottom={'0'} right={'0'}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        <Text>Mangaverz</Text>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
        </Container>
      </Box>
    </Box>
    </>
  )
}