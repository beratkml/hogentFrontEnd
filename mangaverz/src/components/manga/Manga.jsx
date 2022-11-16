import { Box, ButtonGroup, CardHeader, Divider, Heading } from '@chakra-ui/react'
import { Card, CardBody, CardFooter,Stack,Text,Button } from '@chakra-ui/react'
export default function Manga(props){
  const {name,description,author} = props
  return(
    <Card _hover={{
      boxShadow:'2xl',
      color: "teal.500",
    }} maxW='sm'>
      <CardBody maxW='sm'>
        <Stack mt='6' spacing='3'>
          <CardHeader>
            <CardHeader pt='1' fontSize='xl' size='md'>{name}</CardHeader>
          </CardHeader>
          
          <Text pt='3' fontSize='sm'>{description}</Text>
          <Text fontSize='xs'>Author: {author}</Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter maxW='sm'>
          <ButtonGroup spacing='2'>
            <Button variant={'solid'} colorScheme={'teal'}>See details</Button>
          </ButtonGroup>
        </CardFooter>
    </Card>
  )
}



 






// export default function Manga(props){
//   const {
//     name,
//     author,
//     release_date,
//     description,
//     thumbnail
//   } = props
//   return(
//     <div className="container" >
//       <div className="shadow p-3 mb-5 bg-white rounded-right">
//       <div className="card border-light mb-3">
//         <h6 className="card-header">{name}</h6>
//         <p className="card-text">{description}</p>
//         <p className="card-text"><small className="text-muted">Author: {author}</small></p>
//         <button type="button" className="btn btn-secondary btn-lg btn-block">Read more</button>
//       </div>
//     </div>
//     </div>
//   )
// }