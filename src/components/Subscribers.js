import React, { useState } from "react";
import { getSubscribers } from "../common/getSubscribers";
import "../css/Subscribers.css";

const Subscribers = ({ subscriptions, users }) => {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState("");

  const handleSort = (sort) => {
    setSorting(sort);
  };
  const displayData = () => {
    const allUsers = getSubscribers(users, subscriptions);
    const subscribers = allUsers.filter(
      (user) => user.userSubscription.length > 0
    );
    const filteredSubscribers = subscribers.filter((subscriber) =>
      subscriber.first_name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    const sorted = filteredSubscribers.sort((a, b) => {
      if (sorting === "asc") {
        return a.first_name > b.first_name ? 1 : -1;
      } else if (sorting === "desc") {
        return a.first_name < b.first_name ? 1 : -1;
      } else {
        return 0;
      }
    });
    const subscriberUsers =
      sorted.length > 0
        ? sorted.map((subscriber) => {
            const {
              id,
              first_name,
              middle_name,
              last_name,
              username,
              join_date,
              country,
            } = subscriber;
            return (
              <div className="subscribers__data" key={id}>
                <h3>Name : {`${first_name}  ${middle_name} ${last_name} `}</h3>{" "}
                <h3> Username: {username}</h3>
                <h3>Country: {country}</h3>
                <h3>Join Date : {join_date}</h3>
              </div>
            );
          })
        : "No Match";
    return subscriberUsers;
  };

  return (
    <>
      <h1 className="heading">Subscribers</h1>
      <div>
        <button onClick={() => handleSort("asc")}>Asc Sort</button>
        <button onClick={() => handleSort("desc")}>Desc Sort</button>
      </div>
      <div className="inputSearch">
        <input
          type="text"
          placeholder="Search by First Name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="subscribers">{displayData()}</div>
    </>
  );
};

export default Subscribers;
