import React, { Component } from 'react';
import './categories.css';
import Cart from './cart/cart';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="col-md-12">
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">Категория 1</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Категория 2</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Категория 3
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        подкатегория 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        подкатегория 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                    <Cart cartContent = {this.props.toCart}/>
                </Navbar>
            </div>
        );
    }
}

export default Categories;
