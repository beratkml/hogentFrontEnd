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
  Center,
  Textarea
} from '@chakra-ui/react'
import { useEffect, useState,useRef, memo } from "react";
import {AddIcon} from '@chakra-ui/icons';
import {useToast, Text } from '@chakra-ui/react'
import useMangas from '../../api/mangas';
import Error from '../Error';
import * as GenreAPI from '../../api/genres';
import axios from "axios";
import { useCallback } from "react";
import {Image} from "cloudinary-react";

export default memo( function Add(hookprop){
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
  const [error, setError] = useState();
  
  useEffect(()=>{
    const fetchGenres = async()=>{
      const allGenres = await GenreAPI.getAllGenres();
      setGenre(allGenres);
    }
    fetchGenres();
  },[])

  const [imageSelected,setImageSelected] = useState("");
  const [idd,setIdd] = useState("");
  const uploadImage = ()=>{
    try{
      setError(null);
      const formData = new FormData();
    formData.append("file",imageSelected);
    formData.append("upload_preset","xqtbo1he");

    axios.post("https://api.cloudinary.com/v1_1/dqlnsjr7b/image/upload",formData).then((e)=>{
        setIdd(e.data.secure_url);
    });
    toast({
      title: 'Image has been saved',
      description: 'Success',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    }catch(err){
      setError(err);
      toast({
        title: "An error has occured",
        description: error,
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    }
  };
  console.log(idd);
  const onSubmit = useCallback(async (data)=>{
    try{
      setError(null);
      await saveAction({
        ...data,
        chapters:parseInt(data.chapters),
        isFinished:data.isFinished==='true'?true:false,
      });
      toast({
        title: 'OK',
        description: 'Success',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      onClose();
    }catch(err){
      setError(err);
      toast({
        title: "An error has occured",
        description: err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    }
  },[saveAction,setError,toast,onClose]);

  return (
    <>
    <Button margin={3} leftIcon={<AddIcon />} ref={btnRef} colorScheme='facebook' onClick={onOpen}>
        Add Manga
      </Button>
  <Modal isOpen={isOpen} placement='right' onClose={onClose} size={['sm','md']}>
        <ModalOverlay/>
        <Center>
        <ModalContent>
        <ModalCloseButton/>
        <ModalHeader>Add manga to global</ModalHeader>
        
        <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
            <FormLabel>Name</FormLabel>
        <Input w={['300px','400px']} {...register('name')}/>
            <FormLabel>Chapters</FormLabel>
        <Input w={['300px','400px']} type='number' {...register('chapters')}/>
          <FormLabel>Finished</FormLabel>
        <RadioGroup>
          <HStack spacing='24px'>
            <Radio value='true' {...register('isFinished')}>Yes</Radio>
            <Radio value='false' {...register('isFinished')}>No</Radio>
          </HStack>
        </RadioGroup>
        <FormLabel>Author</FormLabel>
        <Input w={['300px','400px']} {...register('author')}/>
        
        <FormLabel>Release date</FormLabel>
        <Input w={['300px','400px']} type={"date"} {...register('release_date')}/>
        <FormLabel>Description</FormLabel>
        <Textarea  w={['300px','400px']} {...register('description')}></Textarea>
        <FormLabel>Thumbnail</FormLabel>
        <Input w={['300px','400px']} type={'file'} onChange={(e)=>{setImageSelected(e.target.files[0])}}></Input>
        <Button onClick={uploadImage}>Upload image</Button>
        <RadioGroup>
          <HStack spacing='24px'>
            {idd?<Radio value={idd} {...register('thumbnail')} ><Text w={'100px'} noOfLines={1} overflow={'hidden'}>{idd}</Text></Radio>:<></>}
          </HStack>
        </RadioGroup>
          <FormLabel>Genre</FormLabel>
        <Select {...register('genreId')} w={['300px','400px']} placeholder="Selecte a genre">
        {genre.map((e, i, a) => {console.log(e.id); return (<option key={e.id} value={e.id}>{e.name}</option>)}) }
        </Select>
      </FormControl>
        <ModalFooter>
        <Button isLoading={isSubmitting} type="submit">Submit</Button>
        </ModalFooter>
        </form>
        
        </ModalBody>
        
        </ModalContent>
        </Center>
      </Modal>
    </>
  )
  });

  