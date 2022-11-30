import MangaList from "../manga/MangaList"
import Tabnav from "../Tabnav"
import Navbar from "../Navbar"
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export default function MangaPage(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idArr,setIdArr] = useState([]);
  const [manga,setManga] = useState([]);
  return(
    <>
      <Navbar/>
      <Tabnav setManga={setManga} idArr={idArr} setIdArr={setIdArr} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <MangaList manga={manga} setManga={setManga} idArr={idArr} setIdArr={setIdArr} isOpen={isOpen}/>
    </>
  )
}