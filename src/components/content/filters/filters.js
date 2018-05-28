import React, { Component } from 'react';
import './filters.css';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <aside>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>+</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <form action="">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Check me out
                                    </Label>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Check me out
                                    </Label>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Check me out
                                    </Label>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Check me out
                                    </Label>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Check me out
                                    </Label>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Check me out
                                    </Label>
                                </FormGroup>
                                <Button color="secondary">Submit</Button>
                            </form>
                        </CardBody>
                    </Card>
                </Collapse>
            </aside>
        );
    }
}

export default Filters;
