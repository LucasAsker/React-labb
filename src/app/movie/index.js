import 'bootstrap/dist/css/bootstrap.css';
import DelteImage from '../images/delete.png';

const Movie = (props) => {
  return (
    <li key={props.index}>
      {props.title} {props.grade}
      <img id="delete_img" src={DelteImage.src} onClick={() => {props.deleteMovie(props.index)}}/>
    </li>
  );
}

export default Movie;                                                   
