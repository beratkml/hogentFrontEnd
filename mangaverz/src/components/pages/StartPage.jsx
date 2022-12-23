import { Box, Button, ButtonGroup, Center,Heading, Text, Link, Input, Container } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";


export default function StartPage(){
  
  return (
    <>
    <Navbar/>
    <Box marginTop={40}>
      <Heading align={'center'}>Mangaverz</Heading>
      <Text data-cy="manga_title" align={'center'} fontSize='xl'>Add your favorite manga to your collection</Text>
      <Center>
      <ButtonGroup>
      <Link as={ReactLink} to='/manga'><Button data-cy="discover" rightIcon={<ArrowForwardIcon/>} >Discover mangas</Button></Link>
      </ButtonGroup>
      </Center>
    </Box>
    </>
  )
}