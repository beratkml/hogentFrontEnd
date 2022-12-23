import { Box, Button,AlertDialogBody,AlertDialogFooter,AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader } from "@chakra-ui/react";
import useCollections from "../../api/collection";
import {DeleteIcon} from '@chakra-ui/icons'
import { useCallback } from "react";
export default function Delete(props){
  const {collectionId, onClose,onOpen,isOpen,setCollection} = props
  const {getAllCollection,deleteCollectionById} = useCollections();
  const handleDelete = useCallback(async()=>{
    console.log(collectionId);
    await deleteCollectionById(collectionId);
    
    const refreshCollection = async()=>{
      const collectionss = await getAllCollection();
      setCollection(collectionss);
    };
    refreshCollection();
    onClose();
  },[deleteCollectionById,getAllCollection,setCollection,onClose,collectionId]);

  return (
    <>
    <Button onClick={handleDelete} leftIcon={<DeleteIcon/>} colorScheme='red' >
        Delete
      </Button>
    </>
  );
}