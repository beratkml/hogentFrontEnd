export default function Manga(props){
  const {id,name,chapters,description, } = props
  return(
    <>
    <div className="">
    <div className="" style={{width:"50%"}}>{id}</div>
    <div>{name}</div>
    <div>{chapters}</div>
    <div>{description}</div>
    </div>
    </>
  )
}