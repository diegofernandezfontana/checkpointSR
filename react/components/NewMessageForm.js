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
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    
 /*   handleSubmit(event) {
        event.preventDefault();
        this.setState({ 
            body: this.body,
            recipient: this.recipient ,
            subject: this.subject 
        
        });
        
    }   */

    render() {  
        return (
            <form /*onSubmit={this.handleSubmit}*/>
                <div className="form-group">
                    <label>To:</label>
                    <input type="text" id="recipient-field" value="recipient" name="recipient" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input type="text" id="subject-field" value="subject" name="subject" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>Body:</label>
                    <textarea id="body-field" name="body" value="body" onChange={this.handleChange}/>
                </div>
                <button type="submit" >Send Message</button>
            </form>
        );
    }

}
