import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import ContentModal from "./ContentModal";

const baseUrl = "https://image.tmdb.org/t/p/original";

// limiting the amount of text in a div to n characters - see below
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function SingleImageInRow({
  title,
  poster_path,
  backdrop_path,
  release_date,
  first_air_date,
  overview,
  movie,
}) {
  const { addMovieToMylist, mylist } = useContext(GlobalContext);

  let storedMovie = mylist.some(
    (o) => o.id === movie?.id && movie?.id !== undefined
  );

  const mylistDisabled = storedMovie
    ? true
    : movie?.id === undefined
    ? true
    : false;

  return (
    <div className="row-posters scroll-moz">
      <div className={`row-poster`}>
        {backdrop_path !== null ? (
          <img
            className={`single-image`}
            src={`${baseUrl}${backdrop_path}`}
            alt={title}
          />
        ) : poster_path !== null ? (
          <img className={`single-image`} src={`${"/NoImage.png"}`} />
        ) : (
          <img src="/NoImage.png" className={"single-image"} />
        )}
        <div className={"single-image-hover"}>
          <h3 className="image-hover-title">{title}</h3>
          <p className="image-hover-type-date">
            {release_date ? `${release_date?.slice(0, 4)}` : ""}
            {first_air_date ? `${first_air_date?.slice(0, 4)}` : ""}
          </p>
          <p className={`image-hover-overview`}>{truncate(overview, 200)}</p>
          <div className="btn-div-hover">
            <button
              className="image-hover-btn"
              disabled={mylistDisabled}
              onClick={() => addMovieToMylist(movie)}
            >
              {" "}
              Save
            </button>
            <ContentModal movieId={movie}>
              <button className="image-hover-btn">More info</button>
            </ContentModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleImageInRow;
