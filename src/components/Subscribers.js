import React from "react";
import { getSubscribers } from "../common/getSubscribers";
import "../css/Subscribers.css"

const Subscribers = ({ subscriptions, users }) => {
  const displayData = () => {
    const allUsers = getSubscribers(users, subscriptions);
    const subscribers = allUsers.filter(
      (user) => user.userSubscription.length > 0
    );
    const a = subscribers.map((subscriber) => {
      const { first_name, middle_name, last_name, username } = subscriber;
      return (
        <div className="subscribers__data">
          <span>Name : {`${first_name}  ${middle_name} ${last_name} `}</span>{" "}
          <span> Username: {username}</span>
        </div>
      );
    });
    return a;
  };

  return (
      <>
      <h1 className="heading">Subscribers</h1>
  <div className="subscribers">{displayData()}</div>
  </>
  );
};

export default Subscribers;
