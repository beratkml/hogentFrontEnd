
import MangaList from "../manga/MangaList"
import Sidebar from "../Sidebar"
import Navbar from "../Navbar"
export default function MangaPage(){
  return(
    <>
      <Navbar/>
      <Sidebar/>
      <MangaList/>
    </>
  )
}