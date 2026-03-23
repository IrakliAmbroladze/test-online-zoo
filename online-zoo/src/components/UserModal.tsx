import type { JSX } from "react";
import type { User } from "../types/User";

export const UserModal = ({ user }: { user: User | null }): JSX.Element => {
  return (
    <div id="user-modal" className="user-modal show-user-modal">
      {user ? (
        <div className="logged-in" id="user-logged-in"></div>
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
