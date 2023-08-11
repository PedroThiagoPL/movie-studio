import GetImages from "../../utils/getImages";
import * as C from './Styles'

import PropTypes from 'prop-types'

function Cards({item}) {
  return (
    <C.Container>
      <img src={GetImages(item.poster_path || item.profile_path || '')} alt="poster" />
      <h3>{item.title || item.name}</h3>
    </C.Container>
  );
}

Cards.propTypes = {
    item: PropTypes.object.isRequired
}

export default Cards;
