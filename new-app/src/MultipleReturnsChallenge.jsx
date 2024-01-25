import React, { useState, useEffect } from "react";
import "./assets/styles/loading.css";

const url = "https://api.github.com/users/carrington-115";

function MultipleReturnsChallenge() {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);

  async function fetchMyData() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(false);
        setLoading(false);
      }
      const userInfo = await response.json();
      setUserData(userInfo);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }

  useEffect(() => {
    fetchMyData();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <SidEffectLoading />;
  } else if (error) {
    return (
      <section
        style={{ color: "white", backgroundColor: "black", fontSize: "18px" }}
      >
        <p>There was an error</p>
      </section>
    );
  }
  return (
    <React.Fragment>
      <DisplayUserData {...userData} />
    </React.Fragment>
  );
}

const SidEffectLoading = () => {
  return (
    <section className="loading-skeleton">
      <div className="heading"></div>
      <div className="image"></div>
      <section className="circle">
        <div className="user-name">
          <br />
        </div>
        <div className="user-profession"></div>
        <div className="other-info"></div>
      </section>
    </section>
  );
};

function DisplayUserData({
  name,
  avatar_url,
  companyName,
  location,
  followers,
}) {
  return (
    <section className="user-container loading-skeleton">
      <h2>Fetched Data</h2>
      <div
        style={{ backgroundColor: "transparent", width: "70%", height: "auto" }}
        className="user-image image"
      >
        <img src={avatar_url} alt={`${name} github profile image`} />
      </div>
      <section className="circle">
        <h2>{name}</h2>
        <p>{`${name} works ${companyName}`}</p>
        <p>{`${name} is in ${location} and has ${followers} followers`}</p>
      </section>
    </section>
  );
}

export default MultipleReturnsChallenge;
