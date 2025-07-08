import {useState} from 'react'

const Display = ({counter}) =>  <div>{counter}</div>



const Button = ({onClick,text}) => (<button onClick={onClick}>{text}</button>)



const App = () => {
    const [counter, setCounter] = useState(0)
    console.log('renderizando el contador, valor: ',counter)

    const increaseByOne = () => {
        console.log('incrementando el contador, valor anterior: ', counter)
        setCounter(counter + 1)
    }
    const decreaseByOne = () => {
        console.log('decrementando el contador, valor anterior: ' , counter)
        setCounter(counter - 1)
    }
    const setZero = () => {
        console.log('reiniciando el contador a cero, valor anterior: ', counter)
        setCounter(setCounter(0))
    }

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
