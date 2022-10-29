import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./header.styles.scss";
const Header = () => {
  return (
    <header>
      <div>
        <div className="container">
          <div className="header">
            <div className="nav">
              <div className="hamburger-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger">
                  <div></div>
                </div>
              </div>
              <ul className="nav_links">
                <li>
                  <a className="current-page" href="index.html">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>

            <h1 className="title">Courtni</h1>
            <div className="end">
              <div className="social">
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
              <div className="cart">
                <a href="cart.html">
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay hidden">
        <div className="modal hidden">
          <ul className="hamburger_links">
            <li>
              <a href="index.html">Shop</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a className="current-page" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
          <div className="hamburger_social">
            <a className="fa-instagram" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
