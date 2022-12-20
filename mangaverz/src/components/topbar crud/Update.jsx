import {Box,Button} from '@chakra-ui/react'
import {RepeatIcon} from '@chakra-ui/icons'
import { useCallback } from 'react'
export default function Update(props){
  const {isOpen,onOpen,onClose,setManga,selectedFlatRows} = props;

  return (
    <Button margin={3} colorScheme={'green'}><RepeatIcon /></Button>
  )
}