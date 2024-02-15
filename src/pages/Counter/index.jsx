import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../../store/Counter';


export const Counter = ()=>{

	const counter = useSelector((store)=>store.Counter)
	const dispatch = useDispatch()
	console.log(counter,'state');

	return(
		<div>
			<h1>{counter.value}</h1>
			<div>
			<button onClick={()=>dispatch(increment())}>increment</button>
			<br />
      <button onClick={()=>dispatch(decrement())}>decrement</button>
			</div>
		</div>
	)
}