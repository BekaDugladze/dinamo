import React, { Component } from "react";
import './css/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import logo from './photo/logo.png';

export default class Contact extends Component {
    render(){
        return(
            <div id="contact">
                <h1>Contact</h1>
                <div className="contact">
                    <div className="contactDiv">
                        <h2>Administration</h2>
                        <p>email: <a href="mailto: Info@fcdinamo.ge">Info@fcdinamo.ge</a></p>
                        <p>Tel: +995 32 251 88 77 <br></br> +995 32 249 67 77</p>
                    </div>
                    <div className="contactDiv">
                        <h2>International Department</h2>
                        <p>email: <a href="mailto: Office@fcdinamo.ge">Office@fcdinamo.ge</a></p>
                        <p>Tel: +995 32 251 88 77 (113)</p>
                    </div>
                    <div className="contactDiv">
                        <h2>Marketing Department</h2>
                        <p>email: <a href="mailto: Marketing@fcdinamo.ge"></a>Marketing@fcdinamo.ge</p>
                        <p>Tel:  +995 32 251 88 77 (108)</p>
                    </div>
                    <div className="contactDiv">
                        <h2>Media Centre</h2>
                        <p>email: <a href="mailto: media@fcdinamo.ge">media@fcdinamo.ge</a></p>
                        <p>Tel: +995 32 251 88 77 (124)</p>
                    </div>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/DINAMOTB" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} style={{color: "#00225c", width: '60px', height: '60px'}}/></a>
                    <a href="https://twitter.com/fcdinamotbilisi" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} style={{color: "#00225c", width: '60px', height: '60px'}}/></a>
                    <a href="https://www.instagram.com/fcdinamotbilisi/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} style={{color: "#00225c", width: '60px', height: '60px'}} /></a>
                    <a href="https://www.youtube.com/user/FCDinamoTV" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} style={{color: "#00225c", width: '60px', height: '60px'}}/></a>
                </div>
                <div className="author">
                    <img src={logo} alt="Dinamo Tbilisi" />
                    <p>@ 2023 <a href="https://www.linkedin.com/in/beqa-dugladze-266374268/" target="_blank" rel="noreferrer">Beka Dugladze</a></p>
                </div>
            </div>
        )
    }
}
