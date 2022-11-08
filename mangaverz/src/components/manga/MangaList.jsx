import { MANGA } from "../../api/mock-data";
import Manga from "./Manga";

export default function MangaList(){
  return(
    <>
    <div className="grid">
      <div className="row">
      {MANGA.map(e=><div className="col"><Manga {...e} key={e.id}/></div>)}
      </div>
    </div>
    </>
  )
}