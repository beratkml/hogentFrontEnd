import Navbar from "../Navbar";
import { useState } from "react";
import CollectionItem from "../mangacollection/CollectionItem";
import MangaCollection from "../mangacollection/MangaCollection";
import Footer from "../Footer";
export default function CollectionPage(){
  const [collection,setCollection] = useState([]);
  return(
    <>
    <Navbar/>
    <MangaCollection collection={collection} setCollection={setCollection}/>
    </>
  )
}