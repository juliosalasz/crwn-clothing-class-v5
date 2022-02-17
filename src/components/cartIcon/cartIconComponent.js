import { connect } from "react-redux";

import CartActions from "../../redux/cart/cartActions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIconComponent.scss";

const CartIcon = ({ CartActions }) => (
  <div className="cart-icon" onClick={CartActions}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  CartActions: () => dispatch(CartActions()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
