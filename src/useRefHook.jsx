//useRef Hook : "use reference" does not re-renders when its value is changed or manipulated
//(similar to useState but useState render on every state or value change)
//
//
//
//
//

import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function useRefHook(){

    // const [number, setNumber] = useState(0);
    const ref = useRef(0);  //ref is an object

    useEffect(()=>{
        console.log("COMPONENT RENDERED!");
    })
    
    function handleClick(){
        // setNumber(n=>n+1);
        ref.current++; 
        console.log(ref.current);
        
        //current property of ref
    }

  return (
    <>
        <button onClick={handleClick}>Click me </button>
        {/* <p>number: {ref.current}</p> */}
    </>
  )
}

export default useRefHook;