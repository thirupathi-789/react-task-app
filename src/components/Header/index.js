
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";

import "./index.css"


const Header = () => {

    return (
        <>
            <nav className="header-container">
                <div className="logo-and-title-container">
                    <img
                        alt="groceries"
                        className="logo"
                        src="https://cdn-icons-png.flaticon.com/512/7662/7662260.png"
                    />
                    <h1 className="title">Groceries</h1>
                </div>
                <ul className="nav-items-list">
                    <li className="link-item">
                        <Link className="route-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="link-item">
                        <Link className="route-link" to="/about">
                            About
                        </Link>
                    </li>
                </ul>
                <Link to="/cart"><FaCartArrowDown size={30} className="cart" /></Link>
            </nav>
        </>
    )
}

export default Header;