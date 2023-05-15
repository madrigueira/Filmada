import "./index.scss";

const MovieCard = ({ poster }) => {
  return (
    <div className="main-moviecard">
      <div className="box" style={{ backgroundImage: `url(${poster})` }}>
        <div className="blur"></div>
        <div className="content">
          <h1>kek</h1>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
