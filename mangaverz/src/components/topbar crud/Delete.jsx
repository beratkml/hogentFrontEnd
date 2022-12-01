import { Button } from "@chakra-ui/react";
import {MinusIcon} from '@chakra-ui/icons';
import { useCallback } from "react";
import useMangas from '../../api/mangas'

export default function Delete(props){
  const {idArr,setIdArr,setManga} = props
  const {deleteMangaById,getAllManga} = useMangas();
  const handleDelete = useCallback(async()=>{
    for await(const e of idArr){
      await deleteMangaById(e);
    }
    setIdArr([]);
    const refreshMangas = async()=>{
      const allMangas = await getAllManga();
      setManga(allMangas);
    };
    refreshMangas();
  },[idArr,setIdArr,setManga,deleteMangaById,getAllManga]);
  return(
    <Button onClick={handleDelete} leftIcon={<MinusIcon />} colorScheme={'red'}>Delete Manga</Button>
  )
}