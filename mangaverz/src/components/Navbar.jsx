import { Box,Card, CardBody, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {Link} from '@chakra-ui/react'

export default function Navbar(){
  return(
    <Card>
      <CardBody>
        <Flex gap={4}>
          <Link as={ReactLink} to='/'>Mangaverz</Link>
          <Spacer/>
          <Link as={ReactLink} to='/collection'>Collection</Link>
          <Link as={ReactLink} to='/profile'>Profile</Link>
        </Flex>
      </CardBody>
    </Card>
  );
}