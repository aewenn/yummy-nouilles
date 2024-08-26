import yummyLogo from "../../assets/Yummy_logo_mobile.svg"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src={yummyLogo} alt="Logo Yummy Nouilles" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'link-active' : '')}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;