const movie = (props) => {
    return (
        <li key={props.index}> {props.title} {props.grade} <button onClick={() => {props.deleteMovie(props.index)}}> Ta bort </button></li>
    )
}
export default movie;