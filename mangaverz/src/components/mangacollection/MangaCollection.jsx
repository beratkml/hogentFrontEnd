export default function Manga(props){
  const {id,name,chapters,description, } = props
  return(
    <>
    <div className="text-bg-dark" style={{width:"50%"}}>{id}</div>
    <div>{name}</div>
    <div>{chapters}</div>
    <div>{description}</div>
    </>
  )
}