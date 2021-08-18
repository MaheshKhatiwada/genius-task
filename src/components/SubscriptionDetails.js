import React from 'react'
import { getSubscribers } from "../common/getSubscribers";
import "../css/SubscriptionDetails.css"

const SubscriptionDetails = ({subscriptions,users}) => {
    const displayDetails=()=>{

        const allUsers = getSubscribers(users, subscriptions);
        const subscribers = allUsers.filter(
          (user) => user.userSubscription.length > 0
        );
        const a = subscribers.map((subscriber) => {
          const { first_name, middle_name, last_name, username,userSubscription } = subscriber;
          return (
            <div className="details__data">
              <span>Name : {`${first_name}  ${middle_name} ${last_name} `}</span>{" "}
              <span> Username: {username}</span>

              <h5>Package: {userSubscription.map(p=> <span>  {  `${p.package}"` }  </span>)}</h5>
            </div>
          );
        });
        return a;
      };


    return (<>
            <h1 className="heading">SubsciptionDetails</h1>
        <div className="details">
            {displayDetails()}
        </div>
        </>

    )
}

export default SubscriptionDetails
