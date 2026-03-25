import { useState, type JSX } from "react";
import type { User } from "../types/User";
import { Link, NavLink } from "react-router-dom";
import { UserModal } from "./UserModal";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `nav-link${isActive ? " highlight" : ""}`;

type HeaderProps = {
  user: User | null;
};
export const Header = ({ user }: HeaderProps): JSX.Element => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isBurgerModalOpen, setIsBurgerModalOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "About" },
    { to: "/map", label: "Map" },
    { to: "/zoos", label: "Zoos" },
    { to: "/contact-us", label: "Contact us" },
  ];

  return (
    <header id="header" className="header">
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assets/images/logo.svg" alt="logo" />
        </Link>
        <div className="header-right">
          <div className="navigations-container">
            <nav className="nav">
              {navLinks.map(({ to, label }) => (
                <NavLink key={to} to={to} end className={navLinkClass}>
                  {label}
                </NavLink>
              ))}
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
            {isUserModalOpen && (
              <UserModal
                user={user}
                handleClose={() => setIsUserModalOpen(false)}
              />
            )}
          </div>
          <div
            className="burger-menu"
            onClick={() => setIsBurgerModalOpen((prev) => !prev)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          {isBurgerModalOpen && (
            <div className="burger-modal show-burger-modal">
              <div
                className="close-modal"
                onClick={() => setIsBurgerModalOpen(false)}
              >
                <div className="close-line-1"></div>
                <div className="close-line-2"></div>
              </div>
              <nav className="burger-nav">
                {navLinks.map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end
                    className={navLinkClass}
                    onClick={() => setIsBurgerModalOpen(false)}
                  >
                    {label}
                  </NavLink>
                ))}{" "}
                <a
                  href="https://www.figma.com/design/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project?node-id=21-4877&t=uVdleYXKyMAVDa9i-0"
                  className="nav-link"
                  target="_blank"
                >
                  Design
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
