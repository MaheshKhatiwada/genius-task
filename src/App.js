import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get("users.json");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getSubscriptions = async () => {
    try {
      const {data} = await axios.get("subscriptions.json");
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const usersData = getUsers();
    const subscriptionsData = getSubscriptions();
    console.log(usersData);
    console.log(subscriptionsData);
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
