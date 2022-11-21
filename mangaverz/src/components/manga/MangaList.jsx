import Manga from "./Manga";
import {SimpleGrid} from '@chakra-ui/react';
import * as MangaApi from '../../api/mangas';
import { useEffect, useState} from "react";

export default function MangaList(){
  const [manga,setManga] = useState([]);

  useEffect(()=>{
    const refreshMangas = async()=>{
      const allMangas = await MangaApi.getAllManga();
      setManga(allMangas);
    }
    refreshMangas();
  },[])
  
  return(
    <>
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={5}>
      {manga.map(e=><Manga key={e.id} {...e}/>)}
    </SimpleGrid>
    </>
  )
}
//columns={{ base: 1,sm:1, md: 2,lg:3, xl:4}} spacing={10}