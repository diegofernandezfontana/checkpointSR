import React from 'react';

export default class extends React.Component {
    constructor(){
        super();
        this.state ={
            body: "",
            recipient: "",
            subject: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { 
        this.setState({
            value: event.target.name
        });
    }

    render() {  
        return (
            <form >
                <div className="form-group">
                    <label>To:</label>
                    <input type="text" id="recipient-field" name="recipient" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" id="subject-field" name="subject" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea id="body-field" name="body" onChange={this.handleChange}/>
                </div>
                <button type="submit">Send Message</button>
            </form>
        );
    }

}
