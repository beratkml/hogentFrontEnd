import { Button,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  ModalCloseButton,useDisclosure,Select } from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import useCollections from '../../api/collection';
import useStatus from "../../api/status";
import { useState,useEffect } from "react";

export default function Add(props){
  const {mangaId} = props;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {saveAction} = useCollections();
  const [status,setStatus] = useState([]);
  const {getAllStatuses} = useStatus();
  const toast = useToast();
  const [error, setError] = useState();

  useEffect(()=>{
    const fetchStatus = async()=>{
      const statuses = await getAllStatuses();
      setStatus(statuses);
    }
    fetchStatus();
  },[getAllStatuses])

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async(data)=>{
    try{
      await saveAction({
        ...data,
        current_chapter:parseInt(data.current_chapter),
        mangaId:mangaId,
        status_reading:data.status_reading,
      })
      
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
    
  }
  
  return (
    <>
    <Button data-cy="add-button" leftIcon={<AddIcon/>} onClick={onOpen} variant={'solid'} colorScheme={'green'}>collection</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reading status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors}>
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
      </Modal>
    </>
    
    
  )
}