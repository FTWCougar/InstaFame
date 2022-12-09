import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  function handleClick(e) {
    e.preventDefault();

    fetch("http://localhost:9292/logout")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      });
  }

  return (
    <span className="logout-banner">
      <div className="logo-div">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img className="logo" src="instafame-logo.png" alt="InstaFame" />
        </a>
      </div>
      <button className="logout-button" onClick={handleClick}>
        Log Out
      </button>
    </span>
  );
}

export default Logout;
