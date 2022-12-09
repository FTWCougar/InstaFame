import React from "react";
import { useHistory } from "react-router-dom";

function Logout({user, handleProfile}) {
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
      {/* <div className="logo-div"> */}
      <div>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img id="left" className="logo" src="instafame-logo.png" alt="InstaFame" />
        </a>
      </div>
      <div className={"banner-buttons"}>
        <img id="avatar" src={user.profile_img} alt={user.username} onClick={handleProfile}/>
      <button id="far-right" className="logout-button" onClick={handleClick}>
        Log Out
      </button>
      </div>
    </span>
  );
}

export default Logout;
