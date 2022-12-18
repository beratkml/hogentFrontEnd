import {ButtonGroup, CardHeader, Divider, Heading,useDisclosure } from '@chakra-ui/react'
import { Card, CardBody, CardFooter,Stack,Text,Button, ScaleFade,Box } from '@chakra-ui/react'
import { useCallback } from 'react';
import { Link as ReactLink } from "react-router-dom";
import {Link} from '@chakra-ui/react'
import useCollection from '../../api/collection'
import Add from '../mangacollection/Add';
import MangaDetails from './MangaDetails';
import {Image} from "cloudinary-react";

export default function Manga(props){
  const {id,name,description,author,thumbnail} = props;
  const {saveAction} = useCollection();
  const handleAdd = useCallback(async()=>{
    console.log(id);
  },[id])
  console.log(thumbnail)
  return(
    <Card ml={'5px'} mb={'15px'} mr={'5px'} _hover={{
      boxShadow:'2xl',
      color: "teal.500",
    }} maxW='md'>
      <CardBody maxW='sm'>
        <Stack mt='6' spacing='3'>
          <CardHeader>
            <CardHeader pt='1' fontSize='xl' size='md'>{name}</CardHeader>
          </CardHeader>
          <Image cloudName="dqlnsjr7b" publicId={thumbnail}/>
          <Text pt='3' fontSize='sm'>{description}</Text>
          <Text fontSize='xs'>Author: {author}</Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter maxW='sm'>
          <ButtonGroup spacing='2'>
            <ReactLink to={`/manga/${id}`}><Button variant='ghost'>See details</Button></ReactLink>
            <Add mangaId={id}/>
          </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

