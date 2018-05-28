import React, { Component } from 'react';
import './search.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.setValue = e => {
            const inputedValue = e.target.value;
            this.setState({value: inputedValue});
            this.props.results(this.state.value);
        }
    }
    render() {
        return (
            <div className="col-md-12">
                <div className="search">
                    <Form>
                        <FormGroup>
                            <Input type="search" placeholder="search" value = {this.state.value} onChange = {this.setValue} />
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Search;
