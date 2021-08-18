import React from "react";

const Subscribers = ({ subscriptions, users }) => {
    const getSubscribers = () => {
        let userWithSubscriptionArray = [];
        users.map((user) => {
            let userSubscription = [];

            subscriptions.map((s) => {
                if (Number(s.user_id) === user.id) {
                    userSubscription.push(s);
                }
            });
            user.userSubscription = userSubscription;
            userWithSubscriptionArray.push(user);
            //console.log(userWithSubscriptionArray)
        });
        return userWithSubscriptionArray;
    };
    const displayData = () => {
      const allUsers = getSubscribers();
        const subscribers=allUsers.filter(user=> user.userSubscription.length>0)
       const a= subscribers.map(subscriber=> {
            const {first_name,middle_name,last_name,username}=subscriber
            return(
                <div >
                    <span>{first_name}</span> <span>{username}</span>
                </div>
            )
        })
        return a;
    };

  return <div>{displayData()}</div>;
};

export default Subscribers;
