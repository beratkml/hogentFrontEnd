import {ButtonGroup, CardHeader, Divider, Heading, Image } from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import { Card, CardBody, CardFooter,Stack,Text,Button } from '@chakra-ui/react'
import { useCallback } from 'react';
import useCollection from '../../api/collection'
import Add from '../mangacollection/Add';
export default function Manga(props){
  const {id,name,description,author} = props;
  const {saveAction} = useCollection();
  const handleAdd = useCallback(async()=>{
    console.log(id);
  },[id])
  return(
    <Card _hover={{
      boxShadow:'2xl',
      color: "teal.500",
    }} maxW='sm'>
      <CardBody maxW='sm'>
        <Stack mt='6' spacing='3'>
          <CardHeader>
            <CardHeader pt='1' fontSize='xl' size='md'>{name}</CardHeader>
          </CardHeader>
          <Text pt='3' fontSize='sm'>{description}</Text>
          <Text fontSize='xs'>Author: {author}</Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter maxW='sm'>
          <ButtonGroup spacing='2'>
            <Button variant={'solid'} colorScheme={'teal'}>See details</Button>
            <Add mangaId={id}/>
          </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

