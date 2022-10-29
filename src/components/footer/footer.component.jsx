import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="connect">
          <div className="social">
            <a classNameName="fa-instagram" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <p>Sign up to receive news and updates.</p>
          <div className="sign_up">
            <input for="email" placeholder="Email Address" />
            <button className="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
