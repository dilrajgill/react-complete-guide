import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/aux';
import PropTypes from 'prop-types';
class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside the consturctor', props);
    }
    componentWillMount() {
        console.log('[Person.js] Inside the WILL MOUNT');
    }
    componentDidMount() {
        console.log('[Person.js] Inside the Did MOUNT');
        console.log(this.props);
        if (this.props.index === 0) {
            this.inputElement.focus();
        }
    }
    render() {
        console.log('[Person.js] Inside the render');
        const rnd = Math.random();
        if (rnd > 9) {
            throw new Error('Something went wrong');
        }
        return (
            <Aux>
                <p onClick={this.props.click}>
                    I am a {this.props.name} and I am {this.props.age} years old!
                 </p>
                <p> {this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }} 
                    type="text" value={this.props.name}
                    onChange={this.props.changed} />
            </Aux>)
    }
}
Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default withClass(Person, classes.Person);