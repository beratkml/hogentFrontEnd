import {AddIcon,SettingsIcon} from '@chakra-ui/icons'
import{color, useDisclosure,useColorModeValue} from '@chakra-ui/react'
import {useForm} from 'react-hook-form'
import {useRef,useCallback,useState,useEffect} from 'react'
import { useToast,Button,HStack,Radio,ModalFooter,ModalBody,FormControl,RadioGroup,Modal,ModalOverlay,Center,Stack,ModalHeader,ModalCloseButton,ModalContent,Box,FormLabel,Input,InputGroup,InputLeftAddon,InputRightAddon,Select,Textarea,DrawerFooter } from '@chakra-ui/react'
import Navbar from '../Navbar'
import useCollections from '../../api/collection'
import useUser from "../../api/user";
import useStatus from '../../api/status'
import { useMemo } from 'react'

export default function CollectionEdit(p){

  const {setCollection,collection,props,collectionId} = p;
  const [nickname,setNickname] = useState("");
  const [objectt,setObject] = useState([]);
  console.log(p);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [status,setStatus] = useState([]);
  const {getUser} = useUser([]);
  const firstField = useRef()
  const {
    handleSubmit,
    setValue,
    register,
    
    formState: { errors, isSubmitting },
  } = useForm()
  const toast = useToast();
  const {saveAction,getCollectionByIdFromUser} = useCollections();

  const {getAllStatuses} = useStatus();
  const [error, setError] = useState();
  const onSubmit = useCallback(async (data)=>{
    try{
      setError(null);
      await saveAction({
        ...data,
        chapters:parseInt(data.chapters),
        isFinished:data.isFinished==='true'?true:false,
      });
      toast({
        title: 'OK',
        description: 'Success',
        status: 'success',
        duration: 2000,
        isClosable: true,
      })
      onClose();
    }catch(err){
      setError(err);
      toast({
        title: "An error has occured",
        description: err.message,
        status: "error",
        duration: 2000,
        isClosable: true,
      })
    }
  },[saveAction,setError,toast,onClose]);

  useEffect(()=>{
    const fetchStatus = async()=>{
      const statuses = await getAllStatuses();
      setStatus(statuses);
    }
    fetchStatus();
  },[getAllStatuses])

  const getUserFrom = useCallback(async()=>{
    const n = await getUser();
    setNickname(n);
  },[getUser])

  useEffect(()=>{
    getUserFrom();
  },[getUserFrom])

  const b = useCallback(async()=>{
    setObject(collection.filter((e)=>e.id===collectionId).map((e)=>JSON.parse(JSON.stringify((e)))))
    parseInt(objectt.current_chapter);
    onOpen();
  },[collection,collectionId,onOpen,objectt]);

  const toDateInputString = (date) => {
    // ISO String without the trailing 'Z' is fine 🙄
    // (toISOString returns something like 2020-12-05T14:15:74Z,
    // datetime-local HTML5 input elements expect 2020-12-05T14:15:74, without the (timezone) Z)
    //
    // the best thing about standards is that we have so many to chose from!
    if (!date) return null;
    if (typeof date !== 'object') {
      // eslint-disable-next-line no-param-reassign
      date = new Date(date);
    }
    const asString = date.toISOString();
    return asString.substring(0, asString.indexOf('T'));
  };

  const collectionss = useCallback(async()=>{
    setCollection(collection);
    setValue('current_chapter', objectt[0].current_chapter);
    setValue('start_date', toDateInputString(objectt[0].start_date));
    setValue('end_date', toDateInputString(objectt[0].end_date));
    setValue('id',objectt[0].id)
    setValue('status_reading', objectt[0].statusreading.id);
  },[setValue,objectt,collection,setCollection])

  useEffect(()=>{
    collectionss();
  },[collectionss]);

  console.log(objectt);
  const color = useColorModeValue('gray.200', 'gray.600');
  
  return (
    <>
      <Button onClick={b}  leftIcon={<SettingsIcon />} colorScheme={'green'} >
        Edit status
      </Button>
      <Modal isOpen={isOpen} placement='right' onClose={onClose} size={['sm','md']}>
        <ModalOverlay/>
        <Center>
        <ModalContent>
        <ModalCloseButton/>
        <ModalHeader>Edit status</ModalHeader>
        
        <ModalBody>
        <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors}>
              <FormLabel>Id</FormLabel>
          <Input  disabled={true} type={'text'} w={'300px'} {...register('id')}/>
              <FormLabel>Current chapter</FormLabel>
              <Input data-cy="chapter_input" w={['300px','400px']} type='number' {...register('current_chapter')}/>
              <FormLabel>Start date</FormLabel>
              <Input data-cy='start_date-button' w={'300px'} type={"date"} {...register('start_date')}/>
              <FormLabel>End date</FormLabel>
              <Input data-cy='end_date-button' w={'300px'} type={"date"} {...register('end_date')}/>
              </FormControl>
              <FormLabel>Status</FormLabel>
                <Select data-cy='status-button' {...register('status_reading')} w={"300px"}  placeholder="Status of reading">
                  {status.map((e, i, a) => {console.log(e.id); return (<option key={e.id} value={e.id}>{e.type}</option>)}) }
                </Select>
              
          <ModalFooter>
            <Button data-cy='close-button' colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button data-cy='submit-button' isLoading={isSubmitting} type={'submit'} leftIcon={<AddIcon/>} variant='ghost'>Add</Button>
            
          </ModalFooter>
          </form>
        
        </ModalBody>
        
        </ModalContent>
        </Center>
      </Modal>
    </>
  )
}