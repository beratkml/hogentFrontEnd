import Manga from "./Manga";
import {CheckboxGroup, SimpleGrid,Box, Button} from '@chakra-ui/react';
import * as MangaApi from '../../api/mangas';
import { useEffect} from "react";

export default function MangaList(props){
  const {isOpen,idArr,setIdArr,manga,setManga} = props
  useEffect(()=>{
    const refreshMangas = async()=>{
      const allMangas = await MangaApi.getAllManga();
      setManga(allMangas);
    };
    refreshMangas();
  },[isOpen,setManga]);
  return(
    <>
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={5}>
      <CheckboxGroup>
      {manga.map(e=><Box key={e.id} as="div" onClick={()=>{
        if(!(idArr.includes(e.id))){
          setIdArr(idArr.concat(e.id));
        }
        console.log(idArr);
      }}><Manga idArr={idArr} {...e}/></Box>)}
      </CheckboxGroup>
    </SimpleGrid>
    </>
  )
}