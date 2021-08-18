import React from 'react'
import { getSubscribers } from "../common/getSubscribers";
import "../css/SubscriptionDetails.css"

const SubscriptionDetails = ({subscriptions,users}) => {
    const displayDetails=()=>{

        const allUsers = getSubscribers(users, subscriptions);
        const subscribers = allUsers.filter(
          (user) => user.userSubscription.length > 0
        );
        const subscriberUsers = subscribers.map((subscriber) => {
          const {id, first_name, middle_name, last_name, username,userSubscription } = subscriber;
          return (
            <div  className="details__data" key={id} >
              <h3>Name : {`${first_name}  ${middle_name} ${last_name} `}</h3>{" "}
              <h3> Username: {username}</h3>

              <h3>Package: {userSubscription.map((p,idx)=> <span key={idx}>  {  `"${p.package}"` }  </span>)}</h3>
            </div>
          );
        });
        return subscriberUsers;
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
