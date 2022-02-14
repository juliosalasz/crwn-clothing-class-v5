import { Link } from "react-router-dom";
import "./HeaderComponent.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="options" to="/shop">
          SHOP
        </Link>
        <Link className="options" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;
