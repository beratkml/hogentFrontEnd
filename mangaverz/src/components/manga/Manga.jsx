import {ButtonGroup, CardHeader, Center, Divider, Heading,useDisclosure,useColorModeValue } from '@chakra-ui/react'
import { Card, CardBody, CardFooter,Stack,Text,Button, ScaleFade,Box } from '@chakra-ui/react'
import { useCallback } from 'react';
import {ViewIcon} from '@chakra-ui/icons'
import { Link as ReactLink } from "react-router-dom";
import {Link} from '@chakra-ui/react'
import useCollection from '../../api/collection'
import Add from '../mangacollection/Add';
import MangaDetails from './MangaDetails';
import {Image} from "cloudinary-react";

export default function Manga(props){
  const color = useColorModeValue('gray.200', 'gray.600');
  const {id,name,description,author,thumbnail} = props;
  return(
    <Card border='1px' borderColor={color} m={'20px'} maxW='sm'>
    <CardBody>
      <Center>
        <Box>
        <Image style={{height:300}} cloudName="dqlnsjr7b" publicId={thumbnail}/>
        </Box>
        
      </Center>
      
      <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
        <Text  w={'300px'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow={'hidden'} fontSize='sm' py='2'>
          {description}
        </Text>
        <Text fontSize='xs'>
          Author: {author}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
      <ReactLink to={`/manga/${id}`} state={{data:props}}><Button leftIcon={<ViewIcon/>}>See details</Button></ReactLink>
        <Add mangaId={id}/>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

