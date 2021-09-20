import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ShoppingCart from './ShoppingCart';

const NavBar = (props) => {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" onClick={props.toggleShoppingCart}>
          <span className="icon is-large">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </span>
        </a>
      </div>
      <ShoppingCart clearCart={props.clearCart} totalCost={props.totalCost} cart={props.cart} isActive={props.shoppingCartActiveClass} toggleShoppingCart={props.toggleShoppingCart}/>             
    </nav>
  );
};

export default NavBar;
