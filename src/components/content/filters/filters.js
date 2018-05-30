import React, { Component} from 'react';
import './filters.css';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const resetFiltersVals = {
    filter1: false,
    filter2: false,
    filter3: false,
    filter4: false,
    filter5: false,
    filter6: false
};

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            filterValue: [],
            data: this.props.data,
            ...resetFiltersVals
        };

        this.toggle = this.toggle.bind(this);
        this.setData = this.setData.bind(this);
        this.changeFilterValue = this.changeFilterValue.bind(this);
        this.resetFilters = this.resetFilters.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setData = () => {
        let filtersArr = [];

        if (this.state.filterValue.length) {
            this.state.data.forEach(elem => {
                this.state.filterValue.forEach(filterElem => {
                    if(elem.subTitle === filterElem){
                        filtersArr.push(elem);
                    }
                })
            });

            this.props.filterData(filtersArr);
            return;
        }

        this.props.filterData(this.state.data);
    };

    changeFilterValue = (e) => {
        let inputId = e.target.dataset.id;
        let value = e.target.value;
        let updatedArr = [];

        if (e.target.checked) {
            updatedArr = this.state.filterValue.length ? [...this.state.filterValue, value] : [value];
        } else {
            updatedArr = [...this.state.filterValue];
            updatedArr.splice(this.state.filterValue.indexOf(value), 1);
        }

        this.setState({
            filterValue: updatedArr,
            [inputId]: !this.state[inputId]
        });
    };

    onSubmit = e =>{
        this.setData(e);
    };

    resetFilters = e => {
        this.setState({
            filterValue: [],
            ...resetFiltersVals
        });
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
                                        <Input data-id="filter1" type="checkbox" name="food" value="карамбуля с сыром" checked={this.state.filter1} onChange={this.changeFilterValue}/>
                                        c сыром
                                    </Label>
                                    <Label check>
                                        <Input data-id="filter2" type="checkbox" name="food" value="карамбуля с говядиной" checked={this.state.filter2} onChange={this.changeFilterValue}/>
                                        со говядиной
                                    </Label>
                                    <Label check>
                                        <Input data-id="filter3" type="checkbox" name="food" value="карамбуля со свининой" checked={this.state.filter3} onChange={this.changeFilterValue}/>
                                        со свининой
                                    </Label>
                                    <Label check>
                                        <Input data-id="filter4" type="checkbox" name="food" value="карамбуля с крольчатиной" checked={this.state.filter4} onChange={this.changeFilterValue}/>
                                        с крольчатиной
                                    </Label>
                                    <Label check>
                                        <Input data-id="filter5" type="checkbox" name="food" value="карамбуля с олениной" checked={this.state.filter5} onChange={this.changeFilterValue}/>
                                        с олениной
                                    </Label>
                                    <Label check>
                                        <Input data-id="filter6" type="checkbox" name="food" value="карамбуля с волчатиной" checked={this.state.filter6} onChange={this.changeFilterValue}/>
                                        с волчатиной
                                    </Label>
                                </FormGroup>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Button color="secondary" onClick={this.onSubmit}>Submit</Button>
                                    </div>
                                    <div className="col-md-6">
                                        <Button color="secondary" onClick={this.resetFilters}>Reset</Button>
                                    </div>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </Collapse>
            </aside>
        );
    }
}

export default Filters;
