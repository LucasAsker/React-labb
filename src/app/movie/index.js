import 'bootstrap/dist/css/bootstrap.css';
import DelteImage from '../images/delete.png';
import starImage from '../images/star.png';

const renderStars = (grade) => {
  const stars = [];
  for (let i = 0; i < grade; i++) {
    stars.push(<img key={i} src={starImage.src} alt="star" />);
  }
  return stars;
};

const Movie = (props) => {
  return (
    <li key={props.index}>
      {props.title} {renderStars(props.grade)}
      <img id="delete_img" src={DelteImage.src}  onClick={() => {props.deleteMovie(props.index)}}/>
    </li>
  );
}

export default Movie;                                                   
