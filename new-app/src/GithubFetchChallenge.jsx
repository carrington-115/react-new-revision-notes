import React, { useState, useEffect } from "react";
import "./assets/styles/challengefile.css";

const fetchUrl = "https://api.github.com/users";

function ChallengeFile() {
  const [users, setUsers] = useState([]);
  async function fetchUsers() {
    try {
      const response = await fetch(fetchUrl);
      const fetchedUsers = await response.json();
      setUsers(fetchedUsers);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <React.Fragment>
      <section className="users-container">
        <h2 style={{ textDecoration: "underline" }}>Github Users </h2>
        {users.map((user) => (
          <DisplayGitHubUser
            key={user.id}
            imageUrl={user.avatar_url}
            userLink={user.html_url}
            username={user.login}
          />
        ))}
      </section>
    </React.Fragment>
  );
}

const DisplayGitHubUser = ({ imageUrl, userLink, username }) => {
  return (
    <section className="user-container">
      <div className="user-image">
        <img src={imageUrl} alt={username} />
      </div>
      <div className="user-info">
        <p className="user-name">{username}</p>
        <a href={userLink} className="github-link">
          Visit Portfolio
        </a>
      </div>
    </section>
  );
};
export default ChallengeFile;
