import * as C from "./Styles";
import PropTypes from 'prop-types'

function Button({ children, red, ...rest }) {
  return (
    <> 
        {red ? ( //Se o parâmetro red for verdade
        <C.ButtonRed {...rest}>{children}</C.ButtonRed> //Verdadeiro - vai utilizar essa estilização
        ) : (
        <C.ButtonWhite {...rest}>{children}</C.ButtonWhite> //Falso - vai utilizar essa estilização
        )}         
    </>
  );
}

Button.propTypes = {
    children: PropTypes.string.isRequired
}

Button.propTypes = {
    red: PropTypes.bool
} 

export default Button;


