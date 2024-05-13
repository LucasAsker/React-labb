import starImage from "../images/star.png"

const movie = (props) => {
    return (
        <li key={props.index}> {props.title} {props.grade} <img src={starImage.src} alt="star image"/> <button onClick={() => {props.deleteMovie(props.index)}}> Ta bort </button></li>
    )
}
export default movie;                           