import {MANGA} from "../../api/mock-data"
import Manga from "./Manga";
import AddManga from "./AddManga";
import {Box, SimpleGrid} from '@chakra-ui/react';
import * as MangaApi from '../../api/mangas';
import { useEffect, useState } from "react";

export default function MangaList(){
  const [manga,setManga] = useState([]);

  useEffect(()=>{
    const fetchMangas = async()=>{
      const items = await MangaApi.getAllManga();
      console.log(items);
      setManga(items);
    }
    fetchMangas();
  },[]);

  return(
    <>
    <SimpleGrid columns={{ base: 1,sm:1, md: 2,lg:3, xl:4}} spacing={10}>
      {manga.map(e=><Manga key={e.id} {...e}/>)}
    </SimpleGrid>
    </>
  )
}
