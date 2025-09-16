import { useContext } from "react";
import { UserContext } from "./useContextComponentA";

function useContextComponentD(){
// function useContextComponentD(prop){
    const value = useContext(UserContext);

    return(
    <div className="box">
        <h4>Component D</h4>
        {/* <h5>Bye {prop.user}</h5> */}
        <h5>Bye {value} </h5>
    </div>
    )
}

export default useContextComponentD;