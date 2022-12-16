import MangaList from "../manga/MangaList"
import Navbar from "../Navbar"
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "../Footer";

export default function MangaAdminPage(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [manga,setManga] = useState([]);
  
  return(
    <>
      <Navbar/>
      <MangaList  manga={manga} setManga={setManga} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <Footer/>
    </>
  )
}