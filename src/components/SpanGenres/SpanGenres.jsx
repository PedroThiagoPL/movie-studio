import * as C from "./SpanGenres";
import PropTypes from "prop-types";

function SpanGenres({ genres }) {
  return (
    <C.Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </C.Container>
  );
}

SpanGenres.propTypes = {
  genres: PropTypes.string.isRequired,
};

export default SpanGenres;
