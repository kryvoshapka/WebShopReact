import React, { Component } from 'react';
import './header.css';
import Menu from './navbar/navbar';
import { Button } from 'reactstrap';
import Scroll from 'react-scroll-to-element';

class Header extends Component {

    render() {
        return (
            <header>
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <Menu/>
                        </div>
                    </div>
                </div>
                <div className="headBody">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="text-center">
                                <h1>Не знаешь где купить <i>карамбулю</i>?</h1>
                                <p>Ищи в <span>Карамбуля-store</span></p>
                                <p>Тот самый КОПИПАСТ - осуши свой кошелёк!</p>
                                <Scroll type="class" element="content">
                                    <Button color="success">Начать закупаться</Button>
                                </Scroll>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;