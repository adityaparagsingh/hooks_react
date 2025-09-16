//useContext : React hook which allow passing of a prop to a component directly through multiple nested components without manually passing to every component
//passing of prop level by level through each component is called Prop Drilling
//thus to avoid prop drilling we use useContext hook

//useContext() Hook : allows you to share values between multiple level of components without passing prop through each level

// we have to set up a provider component and a consumer component

//Provider Component (the component which have the data which we will access)(ex: ComponentA)
// Step 1: import { createContext } from 'react';
// Step 2: export const UserContext = createContext();     
// Step 3: <UserContext.Provider value={user}>
//             <UseContextComponentB user={user}/>
//         </UserContext.Provider>


//Consumer Component (the component which access or use the data from the provider component) (ex: Component D)
// Step 1: import { useContext } from 'react';
//         import { UserContext } from "./useContextComponentA";
// Step 2: const value = useContext(UserContext);
import React from "react";
import UseContextComponentA from './useContextComponentA.jsx'


function useContextHook(){
    return(
    <>
        <UseContextComponentA/>
    </>
    )
}

export default useContextHook;