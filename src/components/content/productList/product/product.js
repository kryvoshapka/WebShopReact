import React, { Component } from 'react';
import './product.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Product extends Component {
    constructor(props) {
        super(props);
        this.handleAddToCart = () => {
            this.props.addCart(this.props.index);
        }
    }
    render() {
        return (
            <div className="col-md-4" id="product-item">
                <Card>
                    <CardImg top width="100%" src={this.props.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subTitle};</CardSubtitle>
                        <CardText>{this.props.text}.</CardText>
                        <Button onClick={this.handleAddToCart} color="success">в корзину</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Product;