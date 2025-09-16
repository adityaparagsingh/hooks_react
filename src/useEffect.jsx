//UseEffect is used when we want to perform some extra or side code function to any component

//this works wnen 1, the component is re-rendered or 2, the component mounts (mouting or adding components for the very first time,,,,<UseStateHook/> , <UseEffectHook/> in App.jsx) or 3, the state of a value is changed

// Mounting is the First Render of any component

// 1. for every re render --> useEffect(()=>{})  (use useEffect with arrow function)
// 2. for component mounting --> useEffect(()=>{},[])      ([] is known as dependency(ies))
// 3. for mounting and a specific value changed --> useEffect(()=>{},[value])

//unmouting a component means removing the component from App.jsx (DOM)


import { useState , useEffect } from "react";

function UseEffectHook(){

    const[count, setCount] = useState(0);
    const[color, setColor] = useState(`green`);

    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    //this will create a new event listener object everytime we resize the tab (in real time) ,,, ∴ we will create just one eventlistner using useEffect and re-render it everytime the tab is resized,,,,,and if we mount method by using empty array as a depedency this will be rendered only once during the first mount and also give us our desired results.
    // window.addEventListener("resize",windowSizeDisplay);
    // console.log("event listener addde");
    
    useEffect(()=>{
        window.addEventListener("resize",windowSizeDisplay);
        console.log("event listener added");
        
        return()=>{
            window.removeEventListener("resize",windowSizeDisplay);
            console.log("event listener removed");

        }
    },[])


    // 1. This will run every time we click on Add button
    // useEffect(() => {
    //         document.title = `Count: ${count}`
    //     } )
        
    
    // 1. This will run only once when component is mounted
    // useEffect(() => {
        //     document.title = `Counter Program`
        // },[] )
        
    // 3. title will only change when we change or toggle the value of color,,,changing the value of count will not change the title
    useEffect(() => {
            document.title = `Count: ${count} : ${color}`
        },[color] )
        
        
    function handleAdd(){
        setCount(c=> (c+1))
    }
    function handleSubtract(){
        setCount(c=> (c-1))
    }
    function handleColor(){
        setColor(c=>c==="green"? "red" : "green");
    }

    function windowSizeDisplay(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
            <p style={{color: color}}>Count : {count}</p>
            <p>{color}</p>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            <br />
            <button onClick={handleColor}>Change Color..</button>
            <hr />
            <p >Tab Width: {width}px</p>
            <p >Tab Height:{height}px</p>
        </>
    )
}

export default UseEffectHook;