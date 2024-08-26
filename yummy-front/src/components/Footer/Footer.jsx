import igIcon from "../../assets/Instagram_logo.svg";
import fbIcon from "../../assets/Facebook_logo.svg";
import mapsIcon from "../../assets/Maps_logo.svg";

const Footer = () => {
    return (
        <footer>
            <div className="social_icons">
                <img src={igIcon} alt="Instagram icon" />
                <img src={fbIcon} alt="Facebook icon" />
                <img src={mapsIcon} alt="Maps icon" />
            </div>
        </footer>
    );
};

export default Footer;
