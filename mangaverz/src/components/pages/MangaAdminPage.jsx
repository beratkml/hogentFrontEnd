import MangaList from "../manga/MangaList"
import Tabnav from "../Tabnav"
import Navbar from "../Navbar"
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import MangaTable from "../manga/table/MangaTable";

export default function MangaAdminPage(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [manga,setManga] = useState([]);
  return(
    <>
      <Navbar/>
      <MangaTable  manga={manga} setManga={setManga} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </>
  )
}