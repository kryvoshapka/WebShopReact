import React, { Component } from 'react';
import './footer.css';
import phone from './phone.png';
import mail from './mail.png';
import facebook from './facebook.png';
import twitter from './twitter.png';
import google from './google.png';
import pinterest from './pinterest.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className="row no-gutters">
                                <div className="col-2"><img src={phone} alt="phone"/></div>
                                <div className="col-10"><p>+ 38(012)345-67-89</p></div>
                            </div>
                            <div className="row no-gutters">
                                <div className="col-2"><img src={mail} alt="mail"/></div>
                                <div className="col-10"><p>mail@spalah1304.com</p></div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="row align-items-center justify-content-around">
                                <a href="https://www.facebook.com/"><img src={facebook} alt="facebook.com"/></a>
                                <a href="https://www.twitter.com/"><img src={twitter} alt="twitter.com"/></a>
                                <a href="https://www.google.com/"><img src={google} alt="google.com"/></a>
                                <a href="https://www.pinterest.com/"><img src={pinterest} alt="pinterest.com"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;