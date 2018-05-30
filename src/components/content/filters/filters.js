import React, { Component} from 'react';
import './filters.css';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            data: this.props.data
        };

        this.setData = this.setData.bind(this);
    }

    setData = () => {
        const inputElems = document.querySelector(".input-elem");
        const inputCheckedElem = inputElems.checked;
        const inputValue = inputElems.value;

        const stateData = this.state.data;


        // if(inputCheckedElem){
        //     stateData.forEach(elem => {
        //         if(elem.subTitle === inputValue){
        //             console.log("yes");
        //         }
        //         return null;
        //     })
        // }

        // this.props.filterData(this.state.data[0]);
    };

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
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с сыром"/>
                                        c сыром
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с говядиной"/>
                                        со говядиной
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля со свининой"/>
                                        со свининой
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с крольчатиной"/>
                                        с крольчатиной
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с олениной"/>
                                        с олениной
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с волчатиной"/>
                                        с волчатиной
                                    </Label>
                                </FormGroup>
                                <Button color="secondary" onClick={this.setData}>Submit</Button>
                            </form>
                        </CardBody>
                    </Card>
                </Collapse>
            </aside>
        );
    }
}

export default Filters;
