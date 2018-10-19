import React from 'react';
import Message from './Message';
import store from '../redux/store';

export default class extends React.Component {

    constructor() {
        super();
        this.state= {
            messages: []
        }
    }

    render() {
        const arrMessages = this.state.messages;
        
        return (
            <div>
                <h1></h1>
                {
                    arrMessages.map(element => {
                        return <Message fullMessage={element}/>
                    })
                }
            </div>
        );
    }

}