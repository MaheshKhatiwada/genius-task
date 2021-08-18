import React from "react";
import "../css/Summary.css";

const Summary = ({ users }) => {
  return (
    <>
      <h2 className="summary__heading">User's Info</h2>
      <div className="summary">
        {users.map((user) => {
           const {id,first_name,middle_name,last_name,username,email,active,address,country,join_date}=user;
          return(
          <div className="summary__user" key={user.id}>
            <h5>ID: {id}</h5>
            <h5>
              Name: <span>{first_name}</span>{" "}
              <span>{middle_name}</span> <span>{last_name}</span>
            </h5>
            <h5>Username: {username}</h5>
            <h5>Email: {email}</h5>
            <h5>Active: {active === "1" ? "Active" : "Not Active"}</h5>
            <h5>Address: {address} </h5>
            <h5>Country :  {country}</h5>
            <h5>Join Date:  {join_date}</h5>
          </div>

          );
        })}
        </div>
    </>
  );
};

export default Summary;
