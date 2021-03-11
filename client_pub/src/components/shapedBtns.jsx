import React from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';
import './shapedBtns.css';
import man from '../images/man1.PNG';


function ShapedBtns() {
    
    return (
        <div className="shapedBtns-contianer">
            <div className="btn-m-container">
                <Link className="linkm-text" to="/management">
                    MANAGEMENT
                </Link>
            </div>
            <div className="btn-t-container">
                <Link className="linkt-text" to="/search-options">
                    TECHNICIANS
                </Link>
            </div>
            <div className="register-container">
                <Link className="register-text" to="/register">
                    REGISTER
                </Link>
            </div>
            <div className="image-container">
                <img src={man} alt="man-logo" className="image-man" />
            </div>
        </div>
    );
}

export default ShapedBtns;