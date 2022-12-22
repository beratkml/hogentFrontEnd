import { Box,Button,ButtonGroup,Card, CardBody, Flex, Grid, GridItem, IconButton,useDisclosure, Spacer,Collapse, Text,useColorMode,useColorModeValue } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {CloseIcon, HamburgerIcon, MoonIcon,SunIcon} from '@chakra-ui/icons'
import {Link} from '@chakra-ui/react'
import AuthenticationButton from "../authentication/AuthButton";
import { useState } from "react";


export default function Navbar(){
  const { colorMode, toggleColorMode } = useColorMode()
  const [display,setDisplay] = useState('none');
  const color = useColorModeValue('white', 'gray.700');
  return(
    <>
    <Card mb={'30px'} boxShadow='lg' borderRadius={'0'}>
      <CardBody>
        <Flex display={['none','none','flex','flex']} gap={4} >
          <Button variant='ghost' onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}</Button>
          <Link as={ReactLink} to='/'><Button variant='ghost'>Mangaverz</Button></Link>
          <Spacer/>
          <Link as={ReactLink} to='/manga'><Button variant='ghost'>Mangas</Button></Link>
          <Link as={ReactLink} to='/admin-manga'><Button variant='ghost'>Admin-Manga</Button></Link>
          <Link as={ReactLink} to='/collection'><Button variant='ghost'>Collection</Button></Link>
          <AuthenticationButton/>
        </Flex>

        
        <IconButton onClick={()=>setDisplay('flex')} display={['flex','flex','none','none']} float={'right'} alignContent={'center'} icon={<HamburgerIcon/>}/>
        <Button mr={3} float={'right'} display={['flex','flex','none','none']} variant='ghost' onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}</Button>
        <Flex display={display} backgroundColor={color} overflowY={'auto'} pos={'fixed'} top={'0'} left={'0'} flexDir={'column'} w={'100vw'} zIndex={'20'} h={'100vh'}>
          <Flex justify={'flex-end'}>
          <IconButton onClick={()=>setDisplay('none')} mt={5} mr={5} icon={<CloseIcon/>}/>
          </Flex>
        <Flex flexDir={'column'} align={'center'} display={['flex','flex','none','none']} gap={4} >
          <Link as={ReactLink} to='/'><Button variant='ghost'>Mangaverz</Button></Link>
          <Spacer display={'none'}/>
          <Link as={ReactLink} to='/manga'><Button variant='ghost'>Mangas</Button></Link>
          <Link as={ReactLink} to='/admin-manga'><Button variant='ghost'>Admin-Manga</Button></Link>
          <Link as={ReactLink} to='/collection'><Button variant='ghost'>Collection</Button></Link>
          <AuthenticationButton/>
        </Flex>
        </Flex>
        
      </CardBody>
    </Card>
    
    </>
    
  );
}