import { useState, useEffect } from "react";

export default function useFetchUser(url) {
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
    } catch (err) {
      console.log(err);
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
  return { loading, userData, error };
}
