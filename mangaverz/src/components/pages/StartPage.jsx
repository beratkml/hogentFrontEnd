import { Box, Button, ButtonGroup, Center,Heading, Text, Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import Navbar from "../Navbar";

export default function StartPage(){
  return (
    <>
    <Navbar/>
    <Box marginTop={40}>
      <Heading align={'center'}>Mangaverz</Heading>
      <Text align={'center'} fontSize='xl'>Add your favorite manga to your collection</Text>
      <Center>
      <ButtonGroup>
      <Link as={ReactLink} to='/manga'><Button rightIcon={<ArrowForwardIcon/>} >Discover mangas</Button></Link>
      </ButtonGroup>
      </Center>
    </Box>
    
    
    </>
  )
}