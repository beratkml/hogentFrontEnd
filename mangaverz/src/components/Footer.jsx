import { Card,CardBody,Button,Flex,Spacer, } from '@chakra-ui/react'
import { Link as ReactLink } from "react-router-dom";
import {MoonIcon,SunIcon} from '@chakra-ui/icons'
import {Link} from '@chakra-ui/react'
export default function Footer(){
  return (
    <>
    <Card bottom={0} mb={'30px'} boxShadow='lg' borderRadius={'0'}>
      <CardBody>
        <Flex gap={4} display={['none','none','flex','flex']}>
          <Link as={ReactLink} to='/'><Button variant='ghost'>Mangaverz</Button></Link>
          <Spacer/>
          <Link as={ReactLink} to='/manga'><Button variant='ghost'>Mangas</Button></Link>
          <Link as={ReactLink} to='/admin-manga'><Button variant='ghost'>Admin-Manga</Button></Link>
          <Link as={ReactLink} to='/collection'><Button variant='ghost'>Collection</Button></Link>
        </Flex>
      </CardBody>
    </Card>
    </>
  )
}