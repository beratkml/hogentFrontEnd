import Manga from "./Manga";
import {Button, SimpleGrid} from '@chakra-ui/react';
import * as MangaApi from '../../api/mangas';
import { useEffect, useState} from "react";
import { Disclosure } from "../topbar crud/Add";

export default function MangaList({isOpen}){
  const [manga,setManga] = useState([]);
  useEffect(()=>{
    const refreshMangas = async()=>{
      const allMangas = await MangaApi.getAllManga();
      setManga(allMangas);
    };
    refreshMangas();
    console.log("Test");
  },[isOpen])
  return(
    <>
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={5}>
      {manga.map(e=><Manga key={e.id} {...e}/>)}
    </SimpleGrid>
    </>
  )
}