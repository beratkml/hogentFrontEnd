import { Box,Center,Divider, Button,Grid,GridItem,Card,Text,Stack,CardBody,CardFooter,Heading, Container, SimpleGrid, Flex, CardHeader,useColorModeValue } from "@chakra-ui/react";
import { useLocation,useParams } from "react-router-dom"
import {Image} from "cloudinary-react";
import Navbar from "../Navbar";

export default function MangaDetails(){
  const location = useLocation();
  const data = location.state?.data;
  const {name,description,author,thumbnail,chapters,release_date,genre} = data;
  const color = useColorModeValue('gray.200', 'gray.600');
  return (
    <>
    <Navbar/>
    <Container  maxW={'5xl'} py={12}>
      <SimpleGrid columns={{base:1,md:2,lg:2}} spacing={10}>
        <Flex>
          <Image cloudName="dqlnsjr7b" publicId={thumbnail}/>
        </Flex>
        <Stack spacing={4}>
          <Card border='1px' borderColor={color}>
            <CardHeader>
            <Heading fontSize='2xl'>{name}</Heading>
            </CardHeader>
            <CardBody>
            <Text>Description: {description}</Text>
            <Text >Chapters: {chapters}</Text>
            <Text >Genre: {genre.name}</Text>
            <Text >Release date: {release_date}</Text>
            </CardBody>
            <Divider/>
            <CardFooter>
            <Text>Author: {author}</Text>
            </CardFooter>
          </Card>
        </Stack>
      </SimpleGrid>
    </Container>
    </>
  );
}