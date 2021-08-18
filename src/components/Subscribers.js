import React from "react";
import { getSubscribers } from "../common/getSubscribers";
import "../css/Subscribers.css"

const Subscribers = ({ subscriptions, users }) => {
  const displayData = () => {
    const allUsers = getSubscribers(users, subscriptions);
    const subscribers = allUsers.filter(
      (user) => user.userSubscription.length > 0
    );
    const subscriberUsers = subscribers.map((subscriber) => {
      const { id,first_name, middle_name, last_name, username ,join_date,country} = subscriber;
      return (
        <div className="subscribers__data" key={id}>
          <h3>Name : {`${first_name}  ${middle_name} ${last_name} `}</h3>{" "}
          <h3> Username: {username}</h3>
          <h3>Country: {country}</h3>
          <h3>Join Date : {join_date}</h3>
        </div>
      );
    });
    return subscriberUsers;
  };

  return (
      <>
      <h1 className="heading">Subscribers</h1>
  <div className="subscribers">{displayData()}</div>
  </>
  );
};

export default Subscribers;
