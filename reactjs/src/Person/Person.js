import React from 'react'; // Or import React, {Component} from 'react';
//^ this is a must.
import './Person.css';

// function person() {
//     return (
//       <div className="person">

//       </div>// THIS is NOT html but it's JSX
//     );
//   }
  
//   export default person;

// OR ES6 version... where looks like this:
//component is a function that returns a JSX.
const  person = (props) => {// can name it anything but best to keep props. //takes in all properties attributed to component Person
return (
  <div className = "Person"> {/* styling reference for div (linked to Persons.css) */}
        <p onClick={props.click}>I'm {props.name} & I'm {props.age} Yeards old!</p> {/*can randomise name if u want.     // JSX NOT HTML. */}
        <p> {props.children} </p> {/* Access e.g. my hobbies...*/}
        <input type= "text" onChange={props.changed} value={props.name}/> 
         {/* ^^ now user can change name .. as changed is referenced to nameChangeHandler by Apps.js Persons element*/}
</div>
)

}

export default person;