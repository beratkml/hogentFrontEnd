import { Box,Card,CardBody,Stack,CardHeader,Text,Divider,CardFooter,ButtonGroup,Button,Image,Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCallback,useState } from "react";
import useMangas from "../../api/mangas";

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

  return (
    <>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://static.standaard.be/Assets/Images_Upload/2010/05/17/B1_GGV2Q67SI.1+GEFVredders.jpg?maxheight=411&maxwidth=731&scale=both'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{manga.name}</Heading>

      <Text fontSize='sm' py='2'>
        {manga.description}
      </Text>
      <Text fontSize='xs'>
        Author: {manga.author}
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Edit details
      </Button>
    </CardFooter>
  </Stack>
</Card>
    </>
  );
}