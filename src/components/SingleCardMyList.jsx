import React from "react";
import MovieControls from "./MovieControls";

//scss classes for SingleCardMyList are in _singleCardSearch.scss

const baseUrl = "https://image.tmdb.org/t/p/original";

function SingleCardMyList({ movie }) {
  return (
    <div className="card-main card-mylist-main">
      <div className="card-image">
        {movie?.poster_path ? (
          <img
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie?.title ? movie.title : movie?.name}
          />
        ) : (
          <div className="card-no-image">
            <p>There is no image</p>
            <h2>Sorry!</h2>
          </div>
        )}
      </div>
      <h5 className="card-title">{movie?.title ? movie.title : movie?.name}</h5>
      <p className="card-description">
        <span>{movie?.title ? "Movie" : "Tv Show"}</span>
      </p>
      <MovieControls movie={movie} />
    </div>
  );
}

export default SingleCardMyList;
