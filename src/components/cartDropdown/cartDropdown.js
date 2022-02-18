import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../cartItem/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { ToggleCartHidden } from "../../redux/cart/cartActions";

import "./cartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItems) => (
            <CartItem key={cartItems.id} item={cartItems} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(ToggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStatetoProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStatetoProps)(CartDropdown));
