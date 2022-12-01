import { Box,Button,ButtonGroup,Card, CardBody, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {Link} from '@chakra-ui/react'
import AuthenticationButton from "../authentication/AuthButton";

export default function Navbar(){
  return(
    <Card>
      <CardBody>
        <Flex gap={4}>
          <Link as={ReactLink} to='/'><Button variant='ghost'>Mangaverz</Button></Link>
          <Spacer/>
          <Link as={ReactLink} to='/manga'><Button variant='ghost'>Manga</Button></Link>
          <Link as={ReactLink} to='/profile'><Button variant='ghost'>Profile</Button></Link>
          <AuthenticationButton/>
        </Flex>
      </CardBody>
    </Card>
  );
}