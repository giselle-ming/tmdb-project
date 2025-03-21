import React, { useEffect, useState } from "react";
import ModalCredits from "./ModalCredits";
import GenreMovieTv from "./GenreMovieTv";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";

const baseUrl = "https://image.tmdb.org/t/p/original";

//styles for ContentModal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "80%",
  bgcolor: "#27282b",
  boxShadow: 24,
  color: "whitesmoke",
  p: 3,
  borderRadius: "15px",
  overflow: "hidden",
};

//styles for Close Button
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "none",
  border: "none",
  color: "whitesmoke",
  fontSize: "1.5rem",
  cursor: "pointer",
  zIndex: 10,
};

export default function ContentModal({ movieId, children }) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const type = movieId?.title || movieId?.original_title ? "Movie" : "Tv Show";

  return (
    <div>
      <Box onClick={handleOpen}>{children}</Box>
      {console.log(movieId)}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          {children && (
            <Box sx={style}>
              <button style={closeButtonStyle} onClick={handleClose}>
                <CloseIcon />
              </button>
              <Box className="modal-container">
                {movieId?.poster_path ? (
                  <img
                    src={`${baseUrl}${movieId?.poster_path}`}
                    alt={movieId?.title || movieId?.name}
                    className="modal-img-upright"
                    style={{ borderRadius: "9px" }}
                  />
                ) : (
                  <div className="modal-no-image-upright">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}
                {movieId?.backdrop_path ? (
                  <img
                    src={`${baseUrl}${movieId?.backdrop_path}`}
                    alt={movieId?.title || movieId?.name}
                    className="modal-img-horizontally"
                    style={{ borderRadius: "9px" }}
                  />
                ) : (
                  <div className="modal-no-image-horizontally">
                    <p>There is no image</p>
                    <h2>Sorry!</h2>
                  </div>
                )}

                <div className="modal-main-content">
                  <div>
                    <h1 className="modal-main-title">
                      {movieId?.title ||
                        movieId?.name ||
                        movieId?.original_title}
                    </h1>
                    <h4 className="modal-year">
                      <span className="modal-year-type">{type}</span>{" "}
                      {(
                        movieId?.release_date ||
                        movieId?.first_air_date ||
                        "--"
                      ).substring(0, 4)}
                      <span className="modal-genres"> Genres: </span>
                      <span className="modal-year-genres">
                        {" "}
                        <GenreMovieTv movieId={movieId} />{" "}
                      </span>
                    </h4>
                    <h5 className="modal-votes">
                      <span>
                        {movieId?.vote_average !== undefined &&
                        movieId?.vote_average !== null
                          ? movieId.vote_average.toFixed(1)
                          : ""}
                      </span>
                      /10 TMDB
                    </h5>
                  </div>
                  <div className="modal-description-container">
                    <h5 className="modal-description">
                      {movieId?.overview !== "" &&
                      movieId?.overview !== undefined
                        ? movieId.overview
                        : "Sorry, there is no description..."}
                    </h5>
                  </div>
                  <div>
                    <ModalCredits movieId={movieId} />
                  </div>
                </div>
              </Box>
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
