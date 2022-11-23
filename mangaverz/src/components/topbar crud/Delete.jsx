import { Button } from "@chakra-ui/react"
import { MinusIcon } from "@chakra-ui/icons"
export default function Delete(){
  return (
    <Button leftIcon={<MinusIcon/>} colorScheme={"red"}>
        Delete manga
      </Button>
  )
}