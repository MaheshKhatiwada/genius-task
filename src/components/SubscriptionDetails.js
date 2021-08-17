import React from 'react'

const SubscriptionDetails = ({subscriptions}) => {
    return (
        <div>
            {subscriptions.map(s=>
                <div key={s.id}>
                    <h1>{s.package}</h1>
                </div>)}
        </div>
    )
}

export default SubscriptionDetails
