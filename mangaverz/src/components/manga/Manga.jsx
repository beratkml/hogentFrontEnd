export default function Manga(props){
  const {
    id,
    name,
    chapters,
    isFinished,
    author,
    release_date,
    description,
    thumbnail
  } = props
  return(
    <div>
      <div>{id}</div>
      <div>{name}</div>
      <div>{chapters}</div>
      <div>{isFinished}</div>
      <div>{author}</div>
      <div>{release_date}</div>
      <div>{description}</div>
      <div>{thumbnail}</div>
    </div>
  )
}