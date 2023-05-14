import "./index.scss";

const MovieCard = ({ poster, title }) => {
  return (
    <div className="main-moviecard">
      <img src={poster} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;
