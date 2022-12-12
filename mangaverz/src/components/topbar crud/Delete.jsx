import { Button } from "@chakra-ui/react";
import {MinusIcon} from '@chakra-ui/icons';
import { useCallback } from "react";
import useMangas from '../../api/mangas'

export default function Delete(props){
  const {setManga,selectedFlatRows} = props
  const {deleteMangaById,getAllManga} = useMangas();

  const handleDelete = useCallback(async()=>{
    for await(const s of selectedFlatRows){
      await deleteMangaById(s.cells[1].value);
    }
    const refreshMangas = async()=>{
      const allMangas = await getAllManga();
      setManga(allMangas);
    };
    refreshMangas();
  },[deleteMangaById,getAllManga,selectedFlatRows,setManga]);
  return(
    <Button margin={3} onClick={handleDelete} leftIcon={<MinusIcon />} colorScheme={'red'}>Delete Manga</Button>
  )
}






// const handleDelete = useCallback(async()=>{
//   for await(const e of idArr){
//     await deleteMangaById(e);
//   }
//   setIdArr([]);
//   const refreshMangas = async()=>{
//     const allMangas = await getAllManga();
//     setManga(allMangas);
//   };
//   refreshMangas();
// },[idArr,setIdArr,setManga,deleteMangaById,getAllManga]);