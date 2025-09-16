//useState: allows the creation of stateful variables values and a setter function which updates the value of the variable in its virtual DOM  

import { useState } from "react";

function UseStateHook(){

  let [value, setValue] = useState("guest")  //the arg inside useState here is Initial State
  const [age,setAge] = useState(0);
  const [isStudent,setIsStudent] = useState(false); //displaying a boolean value using ternary operator

  const updateName = ()=>{
    // value = "Aditya";
    // console.log(value);  this will only show in console but not in webpage as react will not re render the value ... ∴we use setter function

    setValue("yo"); //this will trigger a re render to virtual DOM
  }

  const incrementAge = () =>{
    setAge(age+1)
  }
  const decrementAge = () =>{
    setAge(age-1)
  }
  const resetAge=()=>{
    setAge(0);
  }

  const toggleIsStudent=()=>{
    setIsStudent(!isStudent);   //using ! to reverse the current value of isStudent
  }

  return(
	<>
		<p>name: {value}</p>
    <button onClick={updateName}>Set Name</button>
    <hr />
		<p>age: {age}</p>
    <button onClick={incrementAge}>+1</button>
    <button onClick={decrementAge}>-1</button>
    <button onClick={resetAge}>Reset</button>
    <hr />
    {/* using ternary operator while handling boolean values */}
    <p>Is {value} a Student? : {isStudent?"Yes..he/she is a Student":"No..he/she is NOT a Student"}</p>
    <button onClick={toggleIsStudent}>toggle IsStudent</button>
	</>
  )
}

export default UseStateHook