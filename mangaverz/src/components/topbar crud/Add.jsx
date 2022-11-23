import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  RadioGroup,
  HStack,
  Radio,
  Select,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useEffect, useState, memo,useRef } from "react";
import {AddIcon} from '@chakra-ui/icons';
import { useDisclosure,useToast } from '@chakra-ui/react'
import * as MangaApi from '../../api/mangas';
import * as GenreAPI from '../../api/genres';

export default function Add({isOpen,onOpen,onClose}){
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const btnRef = useRef()
  const [genre,setGenre] = useState([]);
  const toast = useToast();

  useEffect(()=>{
    const fetchGenres = async()=>{
      const allGenres = await GenreAPI.getAllGenres();
      setGenre(allGenres);
    }
    fetchGenres();
  },[])

  const onSubmit = async (data)=>{
    await MangaApi.saveAction({
      ...data,
      chapters:parseInt(data.chapters),
      isFinished:data.isFinished==='true'?true:false,
    });
  }

  return (
    <>
     <Button leftIcon={<AddIcon />} ref={btnRef} colorScheme={"teal"} onClick={onOpen}>
        Add Manga
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose} size={'sm'}>
        <DrawerOverlay/>
        <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Add manga to global</DrawerHeader>
        <DrawerBody>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
        <Input w={'300px'} {...register('name')}/>
            <FormLabel>Chapters</FormLabel>
        <Input w={'300px'} type='number' {...register('chapters')}/>
          <FormLabel>Finished</FormLabel>
        <RadioGroup>
          <HStack spacing='24px'>
            <Radio value='true' {...register('isFinished')}>Yes</Radio>
            <Radio value='false' {...register('isFinished')}>No</Radio>
          </HStack>
        </RadioGroup>
        <FormLabel>Author</FormLabel>
        <Input w={'300px'} {...register('author')}/>
        
        <FormLabel>Release date</FormLabel>
        <Input w={'300px'} type={"date"} {...register('release_date')}/>

        
        <FormLabel>Description</FormLabel>
        <Input w={'300px'} type={"text"} {...register('description')}/>
        
          <FormLabel>Genre</FormLabel>
        <Select w={"300px"} placeholder="Selecte a genre">
          {genre.map(e=><option value={e.id} {...register('genreId')}>{e.name}</option>)}
        </Select>
      </FormControl>
    
        <DrawerFooter>
        <Button onClick={()=>{
          toast({
            title: 'Manga has been added',
            description: 'Success',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
        }} isLoading={isSubmitting} type="submit">Submit</Button>
        </DrawerFooter>
        </form>
        </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
  };
  