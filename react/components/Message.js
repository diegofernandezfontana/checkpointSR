import React from 'react';

export default (props) => {
    console.log();

    return (

        <div>
            <h1>From: <span>{props.fullMessage.from.email}</span></h1>
            <h2>To: <span>{props.fullMessage.to.email}</span></h2>
            <h3>Subject: <span>{props.fullMessage.subject}</span></h3>
            <p>{props.fullMessage.body}</p>
        </div>
    )

}