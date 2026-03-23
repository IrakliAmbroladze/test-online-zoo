import { useState, type JSX } from "react";
import type { User } from "../types/User";
import { Link } from "react-router-dom";
import { UserModal } from "./UserModal";

type HeaderProps = {
  user: User | null;
};
export const Header = ({ user }: HeaderProps): JSX.Element => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  return (
    <header id="header" className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.svg" alt="logo" />
        </Link>
        <div className="header-right">
          <div className="navigations-container">
            <nav className="nav">
              <Link to="/" className="nav-link">
                About
              </Link>
              <Link to="/map/" className="nav-link">
                Map
              </Link>
              <Link to="/zoos/" className="nav-link">
                Zoos
              </Link>
              <Link to="/contact-us/" className="nav-link">
                Contact us
              </Link>
              <a
                href="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
                className="nav-link"
                target="_blank"
              >
                Design
              </a>
            </nav>
            <ul className="soc-media-container">
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <img src="/assets/icons/YouTube.svg" alt="YouTube" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  <img src="/assets/icons/Instagram.svg" alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <img src="/assets/icons/Facebook.svg" alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className="user-container"
            onClick={() => {
              setIsUserModalOpen((prev) => !prev);
            }}
          >
            <ul className="user">
              <li className="user-icon-container">
                <img src="/assets/icons/circle-user.svg" alt="user-icon" />
              </li>
              <li className="user-name" id="user-name">
                {user && user.name}
              </li>
            </ul>
            {isUserModalOpen && <UserModal user={user} />}
          </div>
          <div className="burger-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="burger-modal">
            <div className="close-modal">
              <div className="close-line-1"></div>
              <div className="close-line-2"></div>
            </div>
            <nav className="burger-nav">
              <a href="/" className="nav-link">
                About
              </a>
              <a href="/map/" className="nav-link">
                Map
              </a>
              <a href="/zoos/" className="nav-link">
                Zoos
              </a>
              <a href="/contact-us/" className="nav-link">
                Contact us
              </a>
              <a
                href="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
                className="nav-link"
                target="_blank"
              >
                Design
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
