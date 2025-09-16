import UseContextComponentD from './useContextComponentD.jsx'


// function useContextComponentC(props){
function useContextComponentC(){
    return(
    <div className="box">
        <h4>Component C</h4>
        {/* <UseContextComponentD user = {props.user} /> */}
        <UseContextComponentD/>
    </div>
    )
}

export default useContextComponentC;