import {MANGACOLLECTION} from "../../api/mock-data"
import Manga from "./Manga";
import AddManga from "./AddManga";

export default function MangaList(){
  return(
    <>
    <div className="container">
    <div className="row">
      {MANGACOLLECTION.map(e=><div className="col-12 col-md-6 col-lg-4"><Manga {...e.manga} key={e.id}/></div>)}
      <div className="col-12 col-md-6 col-lg-4 d-flex align-items-center">
      <AddManga />
      </div>
      </div>
    </div>
    </>
  )
}