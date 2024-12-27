
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice'

const CounterView = () => {
    const dispatch = useDispatch()

    const count = useSelector((state) => state.counter.count)
    console.log(count)

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => { dispatch(decrement()) }}>decrement</button>
        </div>
    )
}

export default CounterView