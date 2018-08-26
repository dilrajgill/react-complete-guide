import React, { Component } from 'react';
import Person from './Person/Person.js';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside the consturctor', props);
    }
    componentWillMount() {
        console.log('[Persons.js] Inside the WILL MOUNT');
    }
    componentDidMount() {
        console.log('[Persons.js] Inside the Did MOUNT');
    }
    componentWillReceiveProps(nextProps) {
        console.log('[Update Persons.js] Inside componentWillReceiveProps', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
        return true;
    } componentWillUpdate(nextProps, nextState) {
        console.log('[Update Persons.js] Inside componentWillUpdate', nextProps, nextState);
    }
    componentDidUpdate() {
        console.log('[Update Persons.js] Inside componentDidUpdate');
    }
    render() {
        return this.props.persons.map((person, index) => {
            console.log('[Persons.js] Inside the render');

            return <ErrorBoundry key={person.id}>
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    changed={(event) => this.props.changed(event, person.id)}
                    age={person.age}
                    index = {index} />
            </ErrorBoundry>
        })
    }
}
export default Persons;