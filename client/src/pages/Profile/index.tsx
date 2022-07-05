import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import api from "../../../../server/services/api";

import { AuthContext } from "../../context/AuthContext";

import { UserData } from "../../context/AuthContext";

import leftArrowPurple from "../../assets/leftArrowPurple.svg";
import closeIcon from "../../assets/closeIcon.svg";
import mailIcon from "../../assets/mailIcon.svg";
import placeholderPicture from "../../assets/placeholderPicture.png";

import ProfileStyles from "./styles";

function Profile() {
  const { user, setUser, setIsLogged } = useContext(AuthContext);

  const [avatarURL, setAvatarURL] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      setUser(
        await api.get("/user", {
          params: {
            email: user.data.email,
          },
        }),
      );
    }

    fetchUser();
  }, []);

  async function handleChangeAvatar() {
    await api.post("/uploadPicture", {
      user: user.data,
      picture: avatarURL,
    });

    setUser(
      await api.get("/user", {
        params: {
          email: user.data.email,
        },
      }),
    );
  }

  function handleLogout() {
    setIsLogged(false);
    setUser({} as UserData);
  }

  return (
    <ProfileStyles aria-modal={showModal}>
      <header>
        <Link to="/typer-dev/">
          <img src={leftArrowPurple} alt="Return" width={15} />
          <h4 className="primary-color">Back</h4>
        </Link>
        <div id="user-info">
          <img
            src={user?.data.picture ? user?.data.picture : placeholderPicture}
            onClick={() => setShowModal(true)}
            alt={user?.data.name}
            width={100}
          />
          <span>
            <h2>Welcome, {user?.data.name}!</h2>
            <div id="user-email">
              <img src={mailIcon} alt="Your e-mail." width={12} />
              <h3>{user.data?.email}</h3>
            </div>
          </span>
          <button onClick={handleLogout}>Log Out</button>
        </div>
      </header>
      <main>
        <table>
          <thead>
            <tr>
              <th>
                <h3>words per minute</h3>
              </th>
              <th>
                <h3>errors</h3>
              </th>
              <th>
                <h3>accuracy</h3>
              </th>
              <th>
                <h3>elapsed time</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {user.data.scores?.map((score, index) => (
              <tr key={index}>
                <td>
                  <h2 className={"primary-color" || ""}>{score.wpm}</h2>
                </td>
                <td>
                  <h2 className="secondary-color">{score.errors}</h2>
                </td>
                <td>
                  <h2>{score.accuracy.toFixed(2)}%</h2>
                </td>
                <td>
                  <h2>{score.elapsedTime}s</h2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <div id="change-avatar-modal-container">
        <label htmlFor="change-avatar" id="change-avatar-modal">
          <button id="close-button" onClick={() => setShowModal(false)}>
            <img src={closeIcon} alt="Close modal." width={12} />
          </button>
          <input
            onChange={(e) => setAvatarURL(e.target.value)}
            id="change-avatar"
            type="url"
            placeholder="Place your image's URL..."
          />
          <button onClick={handleChangeAvatar} id="submit-button">
            Submit
          </button>
        </label>
      </div>
    </ProfileStyles>
  );
}

export default Profile;
