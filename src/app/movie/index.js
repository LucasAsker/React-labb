import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const Movie = (props) => {
  return (
    <li key={props.index}>
      {props.title} {props.grade}
      <Button variant="danger" onClick={() => {props.deleteMovie(props.index)}}>Ta bort</Button>
    </li>
  );
}

export default Movie;
