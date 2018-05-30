import React, { Component} from 'react';
import './filters.css';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Filters extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            data: this.props.data,
            filterValue: []
        };

        this.setData = this.setData.bind(this);
    }

    setData = () => {
        let filtersArr = [];
        this.state.data.forEach(elem => {
            this.state.filterValue.forEach(filterElem => {
                if(elem.subTitle === filterElem){
                    filtersArr.push(elem);
                }
            })
        });
        console.log(filtersArr);
        this.props.filterData(filtersArr);
    };

    changeFilterValue = (value) => {
        let currVal = this.state.filterValue;
        currVal.push(value.target.value);
        this.setState({filterValue: currVal});
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
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с сыром" onChange={this.changeFilterValue}/>
                                        c сыром
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с говядиной" onChange={this.changeFilterValue}/>
                                        со говядиной
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля со свининой" onChange={this.changeFilterValue}/>
                                        со свининой
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с крольчатиной" onChange={this.changeFilterValue}/>
                                        с крольчатиной
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с олениной" onChange={this.changeFilterValue}/>
                                        с олениной
                                    </Label>
                                    <Label check>
                                        <Input className="input-elem" type="checkbox" name="food" value="карамбуля с волчатиной" onChange={this.changeFilterValue}/>
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
