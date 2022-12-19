import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import { useCallback } from "react";
import { useEffect,useState } from "react";
import useCollections from "../../api/collection";
import CollectionItem from "./CollectionItem";

export default function MangaCollection(){
  const [collection,setCollection] = useState([]);
  const {getAllCollection} = useCollections([]);

  useEffect(()=>{
    const refreshCollection = async()=>{
      const collections = await getAllCollection();
      setCollection(collections);
    };
    refreshCollection();
  },[getAllCollection]);
  console.log(collection);
  return (
    <>
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={1}>
      {collection.map((e)=><Box key={e.id} as="div"><CollectionItem {...e}/></Box>)}
    </SimpleGrid>
    </>
  );
}