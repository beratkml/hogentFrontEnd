import { Text,FormControl,Input,FormLabel,RadioGroup,HStack,Radio,Textarea,Select,Button,useToast} from "@chakra-ui/react";
import { useLocation,useParams } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useState,useEffect, useCallback,useRef } from "react";
import useMangas from '../../api/mangas';
import axios from "axios";
import * as GenreAPI from '../../api/genres';

export default function MangaEdit(){
  const location = useLocation();
  const pageId = location.state?.data;
  const [manga,setManga] = useState([]);
  const [gGenre,setGenre] = useState([]);
  const {getMangaById,saveAction,saveEdit} = useMangas();
  const {name,author,chapters,genre,isFinished,thumbnail,release_date,description} = manga;


  const toDateInputString = (date) => {
    // ISO String without the trailing 'Z' is fine 🙄
    // (toISOString returns something like 2020-12-05T14:15:74Z,
    // datetime-local HTML5 input elements expect 2020-12-05T14:15:74, without the (timezone) Z)
    //
    // the best thing about standards is that we have so many to chose from!
    if (!date) return null;
    if (typeof date !== 'object') {
      // eslint-disable-next-line no-param-reassign
      date = new Date(date);
    }
    const asString = date.toISOString();
    return asString.substring(0, asString.indexOf('T'));
  };

  useEffect(()=>{
    const fetchGenres = async()=>{
      const allGenres = await GenreAPI.getAllGenres();
      setGenre(allGenres);
    }
    fetchGenres();
  },[])
  const toast = useToast();
  
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm()

  const [error,setError] = useState(null);

  const mangas = useCallback(async()=>{
    const mangaById = await getMangaById(pageId);
    setManga(mangaById);
    setValue('name', mangaById.name);
    setValue('chapters', mangaById.chapters);
    setValue('description', mangaById.description);
    setValue('author', mangaById.author);
    setValue('id', pageId);
    setValue('release_date', toDateInputString(mangaById.release_date));
    setValue('genreId', mangaById.genre.id);
  },[getMangaById,setManga,pageId,setValue])

  useEffect(()=>{
    mangas();
  },[mangas]);

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

  const onSubmit = useCallback(async (data)=>{
    console.log(data);
    try{
      setError(null);
      await saveAction({
        ...data,
        chapters:parseInt(data.chapters),
        isFinished:data.isFinished==='true'?true:false,
      });
      toast({
        title: 'Manga has been added',
        description: 'Success',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
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
  },[saveAction,setError,toast]);
  return(
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name}>
        <FormLabel>Id</FormLabel>
        <Input disabled={true} type={'text'} w={'400px'} {...register('id')}/>
            <FormLabel>Name</FormLabel>
        <Input w={'400px'} {...register('name')}/>
            <FormLabel>Chapters</FormLabel>
        <Input  w={'400px'} type='number' {...register('chapters')}/>
          <FormLabel>Finished</FormLabel>
        <RadioGroup>
          <HStack spacing='24px'>
            <Radio value='true' {...register('isFinished')}>Yes</Radio>
            <Radio value='false' {...register('isFinished')}>No</Radio>
          </HStack>
        </RadioGroup>
        <FormLabel>Author</FormLabel>
        <Input  w={'400px'} {...register('author')}/>
        
        <FormLabel>Release date</FormLabel>
        <Input  w={'400px'} type={"date"} {...register('release_date')}/>
        <FormLabel>Description</FormLabel>
        <Textarea {...register('description')}></Textarea>
          <FormLabel>Genre</FormLabel>
        <Select {...register('genreId')} w={"400px"} placeholder="Selecte a genre">
        {gGenre.map((e, i, a) => {console.log(e.id); return (<option key={e.id} value={e.id}>{e.name}</option>)}) }
        </Select>
      </FormControl>
        <Button isLoading={isSubmitting} type="submit">Submit</Button>
        </form>
    </>
  )
}