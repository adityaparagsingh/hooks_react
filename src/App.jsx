//react hooks are funtions provided by react that let us use react features in functional components without the need of class components
//common examples of react hooks : useState, useEffect, useContext, useRef, useCallback, useRedeucer,..., and many more.

import UseEffectHook from './useeffect.jsx'
import UseStateHook from './useStateHook.jsx'
import UseContextHook from './useContextHook.jsx'
import UseRefHook from './useRefHook.jsx'

function App(){
  return(
	<>
		<p><b>UseState Hook</b></p>
		<UseStateHook/>
		<hr />
		<hr />
		<hr />
		<p><b>UseEffect Hook</b></p>
		<UseEffectHook/>
		<hr />
		<hr />
		<hr />
		<p><b>UseContext Hook</b></p>
		<UseContextHook/>
		<br />
		<hr />
		<hr />
		<hr />
		<p><b>UseRef Hook</b></p>
		<UseRefHook/>
	</>
  )
}

export default App