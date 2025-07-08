import {useState} from 'react'

const Display = (props) => {
    return (
        <div>{props.counter}</div>
    )
}


const Button = (props) => {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}



const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setZero = () => setCounter(0)

    return (
        <div>
            <h2>Passando el estado a componentes hijos</h2>
            <Display counter={counter}/>
            <Button
                onClick={increaseByOne}
                text='plus'
            />
            <Button
                onClick={setZero}
                text='zero'
            />

            <Button
                onClick={decreaseByOne}
                text='minus'
            />
        </div>
    )
}
export default App
