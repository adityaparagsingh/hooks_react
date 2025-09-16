import { useState , createContext} from 'react';
import UseContextComponentB from './useContextComponentB.jsx'

export const UserContext = createContext();

function useContextComponentA(){
    const [user,setUser] = useState("Aditya Parag Singh");
    return(
    <div className="box">
        <h4>Component A</h4>
        <h5>Hello {user}</h5>
        <UserContext.Provider value={user}>
            <UseContextComponentB user={user}/>
        </UserContext.Provider>
    </div>
    )
}

export default useContextComponentA;