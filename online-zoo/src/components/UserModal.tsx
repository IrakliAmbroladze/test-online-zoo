import type { Dispatch, JSX, SetStateAction } from "react";
import type { User } from "../types/User";
import { Link } from "react-router-dom";

export const UserModal = ({
  user,
  setIsUserModalOpen,
}: {
  user: User | null;
  setIsUserModalOpen: Dispatch<SetStateAction<boolean>>;
}): JSX.Element => {
  const onModalClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsUserModalOpen((prev) => !prev);
  };
  return (
    <div id="user-modal" className="user-modal show-user-modal">
      {user ? (
        <div className="logged-in" id="user-logged-in">
          <div> name: {user.name}</div>
          <div> {user.email}</div>
          <Link to={"sign-in"}>
            <button className="btn btn--orange" onClick={onModalClose}>
              SignOut
            </button>
          </Link>
        </div>
      ) : (
        <div className="non-logged-in">
          <a href="/sign-in/">
            <button id="btn-sign-in" className="btn btn--orange">
              SignIn
            </button>
          </a>
          <a href="/registration/">
            <button id="btn-register" className="btn btn--green">
              Registration
            </button>
          </a>
        </div>
      )}
    </div>
  );
};
