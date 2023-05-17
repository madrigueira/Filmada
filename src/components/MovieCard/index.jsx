import "./index.scss";
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ poster, year, average, title }) => {
  return (
    <div className="main-moviecard">
      <div className="box" style={{ backgroundImage: `url(${poster})` }}>
        <div className="blur"></div>
        <div className="content">
          <a id="year">{year}</a>
          <a id="average">
            <AiFillStar />
            {average}
          </a>
        </div>
      </div>
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;
