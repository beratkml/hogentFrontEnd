import { Box, Button, ButtonGroup, Center,Heading, Text, Link, Input } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import Navbar from "../Navbar";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
import {Image} from "cloudinary-react";

export default function StartPage(){
  const [imageSelected,setImageSelected] = useState("");
  const [idd,setIdd] = useState("");
  const uploadImage = ()=>{
    const formData = new FormData();
    formData.append("file",imageSelected);
    formData.append("upload_preset","xqtbo1he");

    axios.post("https://api.cloudinary.com/v1_1/dqlnsjr7b/image/upload",formData).then((e)=>{
      setIdd(e.data.secure_url);
    });
  };
  return (
    <>
    <Navbar/>
    <Box marginTop={40}>
      <Heading align={'center'}>Mangaverz</Heading>
      <Text align={'center'} fontSize='xl'>Add your favorite manga to your collection</Text>
      <Center>
      <ButtonGroup>
      <Link as={ReactLink} to='/manga'><Button rightIcon={<ArrowForwardIcon/>} >Discover mangas</Button></Link>
      </ButtonGroup>
      </Center>
    </Box>
    <Input type={'file'} onChange={(e)=>{setImageSelected(e.target.files[0])}}></Input>
    <Button onClick={uploadImage}>Upload image</Button>
    <Image cloudName="dqlnsjr7b" publicId={idd}/>
    {/* <Footer/> */}
    </>
  )
}