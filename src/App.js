import React from 'react';
import './App.css';
import Contact from './components/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';
import contactData from './../contact';

function App(){
    //console.log(contactData);

    const contactComponent = contactData
    .map(function(contact){
        return (                
            <Contact
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
            />
        )
    });

    return (
        <div className="container-fluid fontText">
            <div className="row">
                <div className="col-md-12">
                    <Header/>
                </div>            
            </div>
            <div className="row">
                <div className="col-md-2 offset-1 box">
                    <img src="/src/images/cibt.jpg"/>
                </div>
                <div className="col-md-5">      
                    {contactComponent}
                </div>
                <div className="col-md-3 box">
                    News Feed
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
