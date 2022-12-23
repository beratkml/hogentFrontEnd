import { Box,Card,AlertDialogBody,AlertDialogFooter,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,CardBody,Stack,CardHeader,Text,Divider,CardFooter,ButtonGroup,Button,Image,Heading, Center,useColorMode,useColorModeValue,useDisclosure } from "@chakra-ui/react";
import {DeleteIcon,SettingsIcon} from '@chakra-ui/icons'
import { useEffect,useRef } from "react";
import { useCallback,useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import useMangas from "../../api/mangas";

import {Image as Cimage} from "cloudinary-react";
import Delete from "./Delete";
import CollectionEdit from "./CollectionEdit";

export default function CollectionItem(props){
  const {id,current_chapter, start_date,end_date,collection,manga,user,setCollection,onClose,onOpen,isOpen,collectionId} = props;

  const [mangaByIdd,setMangaById] = useState([]);
  const {getMangaById,getAllManga} = useMangas([]);

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

  const handleById = useCallback(async()=>{
    const mangaById = await getMangaById(manga.id);
    setMangaById(mangaById)
  },[getMangaById,manga.id])

  useEffect(()=>{
    handleById();
  },[handleById]);
  const color = useColorModeValue('gray.200', 'gray.600')

  return (
    <>
  <Card border='1px' borderColor={color} m={'20px'} maxW='sm'>
    <CardBody>
      <Center>
        <Box>
        <Cimage style={{height:300}} cloudName="dqlnsjr7b" publicId={manga.thumbnail}/>
        </Box>
        
      </Center>
      
      <Stack mt='1' spacing='3'>
      <Heading textAlign={'center'} size='md'>{manga.name}</Heading>
      <Text>Current chapter: {current_chapter}</Text>
      <Text>start date: {toDateInputString(start_date)}</Text>
      <Text>end date: {toDateInputString(end_date)}</Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup>
        <CollectionEdit collectionId={id} setCollection={setCollection} collection={collection} props={props}/>
        <Delete setCollection={setCollection} onClose={onClose} onOpen={onOpen} isOpen={isOpen} collectionId={id}/>
      </ButtonGroup>
    </CardFooter>
  </Card>
    </>
  );
}


