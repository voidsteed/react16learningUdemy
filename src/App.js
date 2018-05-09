import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  }
   switchNameHandler = () => {
    this.setState( {
      persons: [
      {name: 'Maxxxxx', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
      ]
    })
   }

  render() {
    return (
      <div className="App">
      <h1>Hi im a react app</h1>
      <p>this is really working</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>my hobbies: racing</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>
    );
  }
}

export default App;
