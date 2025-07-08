import {useState} from 'react'

const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const setZero = () => setCounter(0)

    return (
        <div>
            {counter}
            <button onClick={increaseByOne}>
                plus
            </button>
            <button onClick={setZero}>
                zero
            </button>
        </div>
    )
}
export default App
