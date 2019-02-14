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
        <div className="font-text">
            <div className="row">
                <div className="col-md-12">
                    <Header/>
                </div>            
            </div>
            <div className="container-fluid p-2" style={{marginTop: "65px"}}>
                <div className="row">
                    <div className="col-md-10 offset-1 box position-fixed">
                        <div className="card">
                            <img className="card-img-top" src="/src/images/img_avatar1.png" alt="Card image" />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Senior Manager</p>
                                <a href="#" className="btn btn-sm btn-danger">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9 offset-3">
                        <div className="row">
                            <div className="col-md-7">
                                    <div className="card">
                                    <p className="card-header font-weight-bold">Create a post</p>
                                    <div className="card-body">
                                        <p className="card-title font-weight-bold">What's on your mind?</p>
                                        <textarea className="form-control form-rounded" defaultValue="With supporting text below as a natural lead-in to additional content." />
                                        <div className="text-right mt-2">
                                            <button className="pl-2 btn btn-sm btn-danger">Post</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    {contactComponent}
                                </div>
                            </div>
                            <div className="col-md-4 box">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="card-header">
                                        <strong>Stories</strong>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                                <hr />
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="card-header">
                                        <strong>Adertisement</strong>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Cras justo odio</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                        <li className="list-group-item">Dapibus ac facilisis in</li>
                                        <li className="list-group-item">Vestibulum at eros</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>  
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
