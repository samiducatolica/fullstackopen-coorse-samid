import {useState} from 'react'

const Display = ({counter}) => <div>{counter}</div>


const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)


const App = () => {

    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleLeftClick = () =>{
        setAll(allClicks.concat('L'))
        const updateLeft= left +1
        setLeft(updateLeft)
        setTotal(updateLeft +right)
    }



    const handleRightClick = () =>{
        setAll(allClicks.concat('R'))
        const updateRight= right+1
        setRight(updateRight)
        setTotal(left +updateRight)
    }



    return (
        <div>
            <h2>La actualización del estado es asíncrona</h2>
            {left}
            <button onClick={handleLeftClick}>left</button>
            <button onClick={handleRightClick}>right</button>
            {right}
            <p>{allClicks.join(' ')}</p>
            <p>Total de clicks: {total}</p>
        </div>
    )
}
export default App
