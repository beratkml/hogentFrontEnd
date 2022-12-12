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
    await saveAction({
      ...data,
      current_chapter:parseInt(data.current_chapter),
      mangaId:mangaId,
      status_reading:data.status_reading,
    })
  }
  
  return (
    <>
    <Button leftIcon={<AddIcon/>} onClick={onOpen} variant={'solid'} colorScheme={'green'}>collection</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Reading status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
              <FormLabel>Current chapter</FormLabel>
                <NumberInput {...register('current_chapter')} max={50} min={10}>
                  <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
              <FormLabel>Start date</FormLabel>
              <Input w={'300px'} type={"date"} {...register('start_date')}/>
              <FormLabel>End date</FormLabel>
              <Input w={'300px'} type={"date"} {...register('end_date')}/>
              </FormControl>
              <FormLabel>Genre</FormLabel>
                <Select {...register('status_reading')} w={"300px"}  placeholder="Status of reading">
                  {status.map((e, i, a) => {console.log(e.id); return (<option key={e.id} value={e.id}>{e.type}</option>)}) }
                </Select>
              
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button isLoading={isSubmitting} type={'submit'} leftIcon={<AddIcon/>} variant='ghost'>Add</Button>
            
          </ModalFooter>
          </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
    
    
  )
}