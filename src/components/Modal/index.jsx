import { useEffect, useState } from "react";
import * as C from "./Styles";
import { getMovieVideos } from "../../services/getData";
import PropTypes from "prop-types";

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      setMovie (await getMovieVideos(movieId))      
    }
    getMovies()
  });

  return (
    <>
      <C.Background onClick={() => setShowModal(false)}>
        {movie && (
          <C.Container>
            <iframe
              src={`https://www.youtube.com/embed/${movie.key}`}
              title="Youtube Video Player"
              height="500px"
              width="100%"
            ></iframe>
          </C.Container>
        )}
      </C.Background>
    </>
  );
}

Modal.propTypes = {
  movieId: PropTypes.string.isRequired,
};

Modal.propTypes = {
  setShowModal: PropTypes.string.isRequired,
};

export default Modal;
