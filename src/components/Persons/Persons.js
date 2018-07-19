import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside COnstructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[update Persons.js] inside will receive props', nextProps)
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log('[update Persons.js] inside shouldComponentUpdate', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps,nextState) {
    console.log('[update Persons.js] inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(nextProps,nextState) {
    console.log('[update Persons.js] inside componentDidUpdate', nextProps, nextState);
  }

  render() {
    console.log('[Persons.js] Inside render')
    return this.props.persons.map((person, index) => {
      return <Person 
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}
export default Persons;