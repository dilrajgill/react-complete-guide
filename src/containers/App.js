import React, { Component } from 'react';
import clas from './App.css';
import Person from '../components/Persons/Person/Person.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import ErrorBoundry from '../components/ErrorBoundry/ErrorBoundry';
import Persons from '../components/Persons/Persons.js';
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside the consturctor', props);
    this.state = {
      persons: []
      , showPersons: true
      , name: 'gill',
      toggleClicked: 0
    };
  }
  componentWillMount() {
    console.log('[App.js] Inside the WILL MOUNT');
  }
  componentDidMount() {
    console.log('[App.js] Inside the Did MOUNT');
  }
  deletePersonHandler = (index) => {
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    }, function () {
      console.log('hi')
    })
  }
  render() {
    console.log('App.js inside render method');
    const style = {
      backgroundColor: 'green', font: 'inherit', color: 'white', border: '1px solid blue'
      , padding: '8px', cursor: 'pointer', ':hover': { backgroundColor: 'lightgreen', color: 'black' }
    };
    let dynamicDiv = null;
    if (this.state.showPersons) {
      dynamicDiv =
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        </div>
      style.backgroundColor = 'red';
      style[':hover'] = { backgroundColor: 'salmon', color: 'black' }
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(clas.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(clas.bold);
    }

    return (<div>< Cockpit classes={classes}
      showPersons={this.state.showPersons}
      switchNameHandler={this.resetNameHandler.bind(this, 'MaxRaj')}
      clas={clas} togglePersonsHandler={this.togglePersonsHandler} />
      {dynamicDiv}
    </div>);
  }
  resetNameHandler = () => {
    this.setState({
      persons: [{ id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 }, { id: 3, name: 'Navjot', age: 29 },
      { id: 4, name: 'Twinkle', age: 26 }],
    });
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons
      .findIndex(p => { return p.id === id; })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
    this.resetNameHandler();
  }
}
export default App;