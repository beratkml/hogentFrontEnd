import MangaList from "../manga/MangaList"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"
import { useDisclosure } from "@chakra-ui/react";

export default function MangaPage(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  return(
    <>
      <Navbar/>
      <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <MangaList isOpen={isOpen}/>
    </>
  )
}