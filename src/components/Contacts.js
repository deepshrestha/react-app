import React from 'react';
import './Contact.css';

function Contact(props){
    return (
        <div>
            <div>
                <h3 style={{color: "red"}}>name: {props.name}</h3>
                <h3 style={{display : !props.email && "none"}}>
                email: {props.email != "" ? props.email : "N/A"}</h3>
                <h3>phone: {props.phone}</h3>
                <div className="row">
                    <div className="col-md-4">
                        Like
                    </div>
                    <div className="col-md-4">
                        Comment
                    </div>
                    <div className="col-md-4">
                        Share
                    </div>
                </div>
            </div>
            <hr/>
        </div>        
    )
}

export default Contact;
