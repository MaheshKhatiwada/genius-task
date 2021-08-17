import React from "react";
import "../css/Summary.css";

const Summary = ({ users }) => {
  return (
    <>
      <h2 className="summary__heading">User's Info</h2>
      <div className="summary">
        {users.map((user) => (
          //    const {id,first_name,middle_name,last_name,username,email,active,address,country,join_date}=user;
          <div className="summary__user" key={user.id}>
            <h5>ID: {user.id}</h5>
            <h5>
              Name: <span>{user.first_name}</span>{" "}
              <span>{user.middle_name}</span> <span>{user.last_name}</span>
            </h5>
            <h5>Username: {user.username}</h5>
            <h5>Email: {user.email}</h5>
            <h5>Active: {user.active === "1" ? "Active" : "Not Active"}</h5>
            <h5>Address: {user.address} </h5>
            <h5>Country :  {user.country}</h5>
            <h5>Join Date:  {user.join_date}</h5>
          </div>
        ))}
      </div>
    </>
  );
};

export default Summary;
