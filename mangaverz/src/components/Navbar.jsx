import { Box,Button,ButtonGroup,Card, CardBody, Flex, Grid, GridItem, Spacer, Text,useColorMode } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {MoonIcon,SunIcon} from '@chakra-ui/icons'
import {Link} from '@chakra-ui/react'
import AuthenticationButton from "../authentication/AuthButton";


export default function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode()
  return(
    <Card boxShadow='lg' borderRadius={'0'}>
      <CardBody>
        <Flex gap={4} display={['none','none','flex','flex']}>
          <Button variant='ghost' onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}</Button>
          <Link as={ReactLink} to='/'><Button variant='ghost'>Mangaverz</Button></Link>
          <Spacer/>
          <Link as={ReactLink} to='/manga'><Button variant='ghost'>Mangas</Button></Link>
          <Link as={ReactLink} to='/admin-manga'><Button variant='ghost'>Admin-Manga</Button></Link>
          <Link as={ReactLink} to='/collection'><Button variant='ghost'>Collection</Button></Link>
          <AuthenticationButton/>
        </Flex>
      </CardBody>
    </Card>
  );
}