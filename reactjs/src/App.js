import React, { Component } from 'react'; // Or import React, {Component} from 'react';
// import React, { useState } from 'react'; // when useing hooks in function (see notes i made part 44)
// ^ function components (useState for hook state manipulation)
import './App.css';
import Person from './Person/Person';



class App extends Component { //OR function App(){....
  state  = {  // var of component.. used to change component.
persons:[    // any form of data.
  { name: 'Isse', age: 25},
  { name: 'jerry', age: 20},
  { name: 'tom', age: 24},
],
otherState: 'some other values'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked hi');
    // DONT DO THIS:this.state.persons[0].name = 'maximilian';
  this.setState( {   // setState allows to update/manipulate state. e.g. (see below) // react recognises where change is needed to be made.. ONLY available in class components .. in function (useState for hook state manipulation)
      persons: [
      { name: newName, age: 29},
      { name: 'jerroro', age: 20},
      { name: 'tominho', age: 24},
    ] 
  } )
  }

  nameChangedHandler = (event) => { // example of 2 way binding
    this.setState( {
      persons: [
      { name: 'tobobo', age: 29},
      { name: event.target.value, age: 27},  // name changed to whatever user inputs 
      { name: 'tokiko', age: 24},
    ] 
  } )
  }

  render() {
    const style = { // inline-styling of switch name button (can put this Persons.css)
      backgroundColor : 'white',
      font : 'inherit',
      border : '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
  return (
    <div className="App">
      <h1> Hi, Im a react App Isse</h1>
      <p>Hello World!</p>
      <button style = {style} 
      onClick = {this.switchNameHandler.bind(this, 'maximomi')} > Switch Name </button> {/*bind allows to pass a value */}
      
      <Person 
      name= {this.state.persons[0].name} 
      age={this.state.persons[0].age} 
      click={this.switchNameHandler.bind(this, 'maxii')}/>   {/* state used rather than hard coding it  -Our Custom element */}
     {/* ^^ passing Method references between components (e.g. App.js & Persons.js)
     (e.g. clicks) and passing values (newName ^ in switchNameH..) using binds method. */}
      <Person 
      name= {this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed={this.nameChangedHandler}>  My Hobbies: Racing </Person> {/*no accessed props.chile (in Person.js) */}
    {/* ^ can now access nameCh.. methods n change name cos changed is now refrenced to nameCh...*/}
      <Person name= {this.state.persons[2].name} 
      age={this.state.persons[2].age} /> 
    </div>                        // THIS is NOT html but it's JSX
  );

  //OR (but not practicle) return React.createElement('div',{className: 'App'},React.createElement('h1','','Hi, I\'m a react App Isse!!'))   // where we render,configuration, child e.g. h1 
      // must've React.Cre... NESTED to add another element in div.
                            // to add class name^ Don't leave blank e.g. '' .                                 
  }
 }


//  //////////////
//  // for function components we use hooks instead of state (see below).. but REMEMBER default ways is class components & use state data method rather than function components with hooks.
//  // n function (useState for hook state manipulation)
//  // can use useState multiple times 
//  // can have a function in a function

//  const App = props => {
//   const [personsState, setPersonsState] = useState({
//        persons: [
//        { name: 'Issiniho', age: 29},
//        { name: 'jerroro', age: 20},
//        { name: 'tominho', age: 24},
//      ],
//     //  otherState: 'some other values loool'
//    });

//    const [otherState, setOtherState] = useState ('some other values loool');
//    console.log(personsState, otherState); // better way of replacing original data (otherState) that was not carried over to setPersonsState.
//    // ^ rather than manully merging.
//     const switchNameHandler = () => {
//      // console.log('was clicked hi');
//      // DONT DO THIS:this.state.persons[0].name = 'maximilian';
//    setPersonsState( {
//        persons: [
//        { name: 'Isssss', age: 29},
//        { name: 'jerr', age: 20},
//        { name: 'tom', age: 24},
//      ] ,
  
//    } )
//    }
   
//    return (
//  <div className="App">
//        <h1> Hi, Im a react App Isse</h1>
//        <p>Hello World!</p>
//        <button onClick = {switchNameHandler} > Switch Name </button>
//        <Person name= {personsState.persons[0].name} age={personsState.persons[0].age} />   {/* state used rather than hard codsing it  -Our Custom element */}
//        <Person name= {personsState.persons[1].name} age={personsState.persons[1].age} >  My Hobbies: Racing </Person>
//        <Person name= {personsState.persons[2].name} age={personsState.persons[2].age} /> 
    
//      </div>
//    );
//   }
 
export default App;
