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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'
import { useEffect, useState,useRef } from "react";
import {AddIcon} from '@chakra-ui/icons';
import {useToast } from '@chakra-ui/react'
import useMangas from '../../api/mangas';
import * as GenreAPI from '../../api/genres';

export default function Add(hookprop){
  const {isOpen,onOpen,onClose} = hookprop;
  const {saveAction} = useMangas();
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
    await saveAction({
      ...data,
      chapters:parseInt(data.chapters),
      isFinished:data.isFinished==='true'?true:false,
    });
  }

  return (
    <>
    <Button margin={3} leftIcon={<AddIcon />} ref={btnRef} colorScheme='facebook' onClick={onOpen}>
        Add Manga
      </Button>
  <Modal isOpen={isOpen} placement='right' onClose={onClose} size={'sm'}>
        <ModalOverlay/>
        <ModalContent>
        <ModalCloseButton/>
        <ModalHeader>Add manga to global</ModalHeader>
        <ModalBody>
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
        <Select {...register('genreId')} w={"300px"}  placeholder="Selecte a genre">
        {genre.map((e, i, a) => {console.log(e.id); return (<option key={e.id} value={e.id}>{e.name}</option>)}) }
        </Select>
      </FormControl>
    
        <ModalFooter>
        <Button onClick={()=>{
          toast({
            title: 'Manga has been added',
            description: 'Success',
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
        }} isLoading={isSubmitting} type="submit">Submit</Button>
        </ModalFooter>
        </form>
        </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
  };

  