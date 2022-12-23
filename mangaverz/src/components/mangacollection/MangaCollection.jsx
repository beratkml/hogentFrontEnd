import { Box, Center, SimpleGrid,useDisclosure } from "@chakra-ui/react";
import { useCallback } from "react";
import { useEffect,useState } from "react";
import useCollections from "../../api/collection";
import useUser from "../../api/user";
import CollectionItem from "./CollectionItem";
import { useAuth0 } from '@auth0/auth0-react';

export default function MangaCollection(props){
  const {collection,setCollection} = props
  const [nickname,setNickname] = useState("");
  const { user, isAuthenticated } = useAuth0();
  const {getAllCollection,getAndFilterCollectionById} = useCollections([]);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {getUser} = useUser([]);

  
  useEffect(()=>{
    const refreshCollection = async()=>{
      const collections = await getAndFilterCollectionById(nickname.id);
      setCollection(collections);
    };
    refreshCollection();
  },[getAndFilterCollectionById,nickname,setCollection,isOpen]);

  // const test = useCallback(async()=>{
  //   setUserr(user.sub);
  // },[user])

  const getUserFrom = useCallback(async()=>{
    const n = await getUser();
    setNickname(n);
  },[getUser])

  useEffect(()=>{
    getUserFrom();
  },[getUserFrom])

  console.log(collection);
  
  return (
    <>
    <SimpleGrid columns={{base:1,md:2,lg:3,xl:4}} spacing={1}>
      {collection.map((e)=><Box key={e.id} as="div"><CollectionItem isOpen={isOpen} onOpen={onOpen} onClose={onClose} collection={collection} setCollection={setCollection} user={nickname} {...e}/></Box>)}
    </SimpleGrid>
    </>
  );
}