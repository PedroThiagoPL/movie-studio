import * as C from "./Sidebar";
import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <C.Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <C.Content>
        <C.Ul>
          <C.Li onClick={closeSidebar}>
            <Link to="/">Home</Link>
          </C.Li>
          <C.Li onClick={closeSidebar}>
            <Link to="/filmes">Filmes</Link>
          </C.Li>
          <C.Li onClick={closeSidebar}>
            <Link to="/series">Séries</Link>
          </C.Li>
        </C.Ul>
      </C.Content>
    </C.Container>
  );
}

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
};

export default Sidebar;
