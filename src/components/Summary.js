import React from "react";
import { getSubscribers } from "../common/getSubscribers";
import "../css/Summary.css";

const Summary = ({ users,subscriptions }) => {


  const displayUserInfo=()=>(
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

  const displaySummary=()=>{
    const allUsers=getSubscribers(users,subscriptions);
    const subscribers = allUsers.filter(
      (user) => user.userSubscription.length > 0
    );
    const activeUsers=users.filter(user=> user.active==="1")
    return(
      <>
      <h1>Summary</h1>
      <div>
        <h3>Total Users: {users.length}</h3>
        <h3>Total Subscriptions Data : {subscriptions.length}</h3>
        <h3>Total Subscribers:{subscribers.length}</h3>
        <h3>Total Non-Subscribers:{users.length-subscribers.length}</h3>
        <h3>Active Users:{activeUsers.length}</h3>
      </div>
      </>
    )
  }
  return (
    <>
    <div className="summaryy">
      {displaySummary()}
    </div>
    <div>{displayUserInfo()}</div>
    </>
  );
};

export default Summary;
