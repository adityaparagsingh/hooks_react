import UseContextComponentC from './useContextComponentC.jsx'


// function useContextComponentB(props){
function useContextComponentB(){
    return(
    <div className="box">
        <h4>Component B</h4>
        <UseContextComponentC/>
        {/* <UseContextComponentC user={props.user}/> */}
    </div>
    )
}

export default useContextComponentB;