import {useState} from 'react'

// const Display = ({counter}) => <div>{counter}</div>

const Button = (props) => {
    <button onClick={props.handleClick}>
        {props.text}
    </button>
}

const History = (props) => {

    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing the buttons.
            </div>
        )
    }

    return (
        <div>
            Button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const App = () => {

    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('value now', newValue)
        setValue(newValue)
    }


    return (
        <div>
            {value}
            <h2>Pasando controladores de eventos a componentes hijos</h2>
            <button onClick={() => setToValue(1000)}>Thousand</button>
            <button onClick={() => setToValue(0)}>Reset</button>
            <button onClick={() => setToValue(value + 1)}>Increment</button>
        </div>
    )
}
export default App
