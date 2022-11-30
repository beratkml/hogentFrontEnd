import { Button } from "@chakra-ui/react";
import {MinusIcon} from '@chakra-ui/icons';
import { useCallback } from "react";
import * as MangaApi from '../../api/mangas'

export default function Delete(props){
  const {idArr,setIdArr,setManga} = props
  const handleDelete = useCallback(async()=>{
    for await(const e of idArr){
      await MangaApi.deleteMangaById(e);
    }
    setIdArr([]);
    const refreshMangas = async()=>{
      const allMangas = await MangaApi.getAllManga();
      setManga(allMangas);
    };
    refreshMangas();
  },[idArr,setIdArr,setManga]);
  return(
    <Button onClick={handleDelete} leftIcon={<MinusIcon />} colorScheme={'red'}>Delete Manga</Button>
  )
}