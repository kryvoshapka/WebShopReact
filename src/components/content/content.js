import React, { Component } from 'react';
import './content.css'
import Categories from './categories/categories';
import Search from './search/search';
import Filters from './filters/filters';
import ProductList from './productList/productList';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toBasket: [],
            searchResultsToFilter: ""
        };
        this.sendToCart = product => {
            this.state.toBasket.push(product);
        };
        this.searchRes = str => {
            this.state.searchResultsToFilter = str;
            // console.log(this.state.searchResultsToFilter);
        }
    }

    render() {
        return (
            <section className="content">
                <div className="container">
                    <div className="row">
                        <Categories toCart = {this.state.toBasket}/>
                    </div>
                    <div className="row">
                        <Search results = {this.searchRes}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Filters/>
                        </div>
                        <div className="col-md-9">
                            <ProductList toCart = {this.sendToCart} resProd = {this.state.searchResultsToFilter}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;
