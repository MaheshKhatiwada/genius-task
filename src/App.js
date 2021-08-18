import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Header from "./components/Header";
import Summary from "./components/Summary"
import "./css/App.css";
import Subscribers from "./components/Subscribers";
import SubscriptionDetails from "./components/SubscriptionDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const getUsers=async()=> {
    try {
      const response =await axios.get("users.json");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSubscriptions=async()=> {
    try {
      const response =await axios.get("subscriptions.json");
      setSubscriptions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getSubscriptions();
  },[]);


  return (
    <BrowserRouter>

    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Summary users={users}/>
        </Route>
        <Route exact path="/subscribers" >
          <Subscribers users={users} subscriptions={subscriptions}/>
        </Route>
        <Route exact path="/subscriptionDetails" >
          <SubscriptionDetails subscriptions={subscriptions} users={users}/>
        </Route>

      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
