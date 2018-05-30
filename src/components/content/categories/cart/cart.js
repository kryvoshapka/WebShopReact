import React, { Component } from 'react';
import './cart.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import cart from './shopping-cart.png'

class Cart extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };

        this.deleteProduct = e => {
            console.log(e.target.getAttribute("key"));
        };

        this.fillCart = (el, i) => {
            return <DropdownItem key = {i}>{el.title} </DropdownItem>;
        }
    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render() {
        if (this.props.cartContent.length !== 0) {
            return (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="cart">
                        <img src={cart} alt="cart"/>
                        <p>{this.props.cartContent.length}</p>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>Корзина</DropdownItem>
                        {
                            this.props.cartContent.map( this.fillCart )
                        }
                        <DropdownItem divider/>
                        <DropdownItem>
                            <Button color="success">Оформить заказ</Button>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        } else {
            return (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle className="cart">
                        <img src={cart} alt="cart"/>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem header>Корзина</DropdownItem>
                        <DropdownItem>нет товаров</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        }
    }
}

export default Cart;
