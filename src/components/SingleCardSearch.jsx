import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ContentModal from "./ContentModal";

const baseUrl = "https://image.tmdb.org/t/p/original";

function SingleCardSearch({ movie }) {
  const { addMovieToMylist, mylist } = useContext(GlobalContext);

  let storedMovie = mylist.some(
    (o) => o.id === movie?.id && movie?.id !== undefined
  );

  const mylistDisabled = storedMovie
    ? true
    : movie?.id === undefined
    ? true
    : false;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="card-main">
      <div className="card-image">
        {movie?.poster_path ? (
          <img
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie?.title || movie?.original_title}
          />
        ) : (
          <div className="card-no-image">
            <p>There is no image</p>
            <h2>Sorry!</h2>
          </div>
        )}
      </div>
      <h5 className="card-title">{movie.title || movie.original_title}</h5>
      <p className="card-description">{truncate(movie.overview, 100)}</p>
      <div className="card-search-btns-main">
        <button
          disabled={mylistDisabled}
          className="card-search-btn"
          onClick={() => addMovieToMylist(movie)}
        >
          Save
        </button>
        <ContentModal movieId={movie}>
          <button className="card-search-btn">Info</button>
        </ContentModal>
      </div>
    </div>
  );
}

export default SingleCardSearch;
