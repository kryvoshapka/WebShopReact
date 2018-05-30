import React, { Component } from 'react';
import './productList.css';
import Product from './product/product';

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roolSearch: this.props.resProg
        };

        //---------------------------------------------------------------------------------
    }

    filterProducts = el => {
        return el.title.toLowerCase().includes(this.state.roolSearch.toLowerCase());
    };

    //---------------------------------------------------------------------------------

    addToCart = index => {
        this.props.toCart(this.props.data[index]);
    };

    setProduct = (el, i) => {
        return <Product key = {i} index = {i} img = {el.img} title = {el.title} subTitle = {el.subTitle} text = {el.text} addCart = {this.addToCart}/>;
    };

    //попытка сделать живой поиск товаров, пока что не получилось!

    render() {
        // //---------------------------------------------------------------------------------
        // if (this.props.resProd != "") {
        //     return (
        //         <section className="productList">
        //             <div className="row">
        //                 {
        //                     this.state.data.filter(this.filterProducts).map( this.setProduct )
        //                 }
        //             </div>
        //         </section>
        //     );
        // //---------------------------------------------------------------------------------
        // } else {
        //     return (
        //         <section className="productList">
        //             <div className="row">
        //                 {
        //                     this.state.data.map( this.setProduct )
        //                 }
        //             </div>
        //         </section>
        //     );
        // }

        return (
            <section className="productList">
                <div className="row">
                    {
                        this.props.data.map( this.setProduct )
                    }
                </div>
            </section>
        );
    }
}

export default ProductList;
