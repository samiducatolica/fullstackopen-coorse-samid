import {useState} from 'react'

// const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const History = (props)=> {

    if (props.allClicks.length === 0) {
        return(
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
        setTotal(updateRight +left)

    }

    return (
        <div>
            <h2>Renderizado condicional</h2>
            {left}
            <Button handleClick={handleLeftClick} text='left'/>
            <Button handleClick={handleRightClick} text='right'/>
            {right}
            <p>{total}</p>
            <History allClicks={allClicks}/>
        </div>
    )
}
export default App
