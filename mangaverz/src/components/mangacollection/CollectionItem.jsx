import { Box,Card,CardBody,Stack,CardHeader,Text,Divider,CardFooter,ButtonGroup,Button,Image,Heading, Center,useColorMode,useColorModeValue } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCallback,useState } from "react";
import useMangas from "../../api/mangas";
import {Image as Cimage} from "cloudinary-react";

export default function CollectionItem(props){
  const {id,start_date,end_date,current_chapter,manga,userId,statusReadingId} = props;
  const [mangaByIdd,setMangaById] = useState([]);
  const {getMangaById} = useMangas([]);
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
      
      <Stack mt='6' spacing='3'>
      <Heading textAlign={'center'} size='md'>{manga.name}</Heading>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
    </CardFooter>
  </Card>
    </>
  );
}


