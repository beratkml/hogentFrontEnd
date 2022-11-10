export default function Manga(props){
  const {
    name,
    author,
    release_date,
    description,
    thumbnail
  } = props
  return(
    <div className="container" >
      <div className="shadow p-3 mb-5 bg-white rounded-right ">
      <div className="card border-light mb-3">
        <h6 className="card-header">{name}</h6>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">Author: {author}</small></p>
        <button type="button" className="btn btn-secondary btn-lg btn-block">Read more</button>
      </div>
    </div>
    </div>
  )
}