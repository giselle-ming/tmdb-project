import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ContentModal from "./ContentModal";

//scss classes for MovieControls are in _singleCardSearch.scss

function MovieControls({ movie }) {
  const { removeMovieFromMylist } = useContext(GlobalContext);

  return (
    <div className="moviecontrols-main">
      <button
        className="moviecontrols-btn"
        onClick={() => removeMovieFromMylist(movie?.id)}
      >
        Delete
      </button>
      <ContentModal movieId={movie}>
        <button className="moviecontrols-btn">More info</button>
      </ContentModal>
    </div>
  );
}

export default MovieControls;
