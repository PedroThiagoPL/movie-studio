import GetImages from "../../utils/getImages";
import * as C from "./Credits";
import PropTypes from "prop-types";

function Credits({ credits }) {
  return (
    <>
    <C.Title>Créditos</C.Title>
    {credits && (
    <C.Container>
        {credits.slice(0, 4).map((artist) => (
            <div key={artist.id}>
                <img src={GetImages(artist.profile_path)} />
                <p>{artist.original_name}</p>
            </div>
        ))}
      <div></div>
    </C.Container>
)}
    </>
  )
  }

Credits.propTypes = {
  credits: PropTypes.string.isRequired,
};

export default Credits;
