import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
             <nav>
              <Link to="/">Home</Link>
              <Link to="/order">Order</Link>
              <Link to="/about">About</Link>
              <Link to="/review">Review</Link>
              <Link to="/login">Login</Link>
             </nav>
        </div>
    );
};

export default Header;