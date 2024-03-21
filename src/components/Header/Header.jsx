import { Link, NavLink } from "react-router-dom";
import '../Header/Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <p>My Website</p>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
               
            </nav>
        </div>
    );
};

export default Header;