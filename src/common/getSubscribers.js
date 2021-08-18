 export const getSubscribers = (users,subscriptions) => {
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
    });
    return userWithSubscriptionArray;
};