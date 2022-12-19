import Manga from "./Manga";
import {CheckboxGroup, SimpleGrid,Box, Button} from '@chakra-ui/react';
import useMangas from '../../api/mangas';
import { useEffect} from "react";
import useCollections from "../../api/collection";
import { useState } from "react";

export default function MangaList(props){
  const {isOpen,manga,setManga} = props
  const {getAllManga} = useMangas();
  const [error,setError] = useState(null);

  useEffect(()=>{
    const refreshMangas = async()=>{
      try{
        setError(null);
        const allMangas = await getAllManga();
        setManga(allMangas);
      }catch(err){
        setError(err.message || 'Failed to fetch the places, try again later')
      }
    };
    refreshMangas();
  },[isOpen,setManga,getAllManga]);

  return(
    <>
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}}>
      {manga.map(e=><Box key={e.id} as="div"><Manga {...e}/></Box>)}
    </SimpleGrid>
    </>
  )
}