import {useState} from "react";

const Button =(props)=>(
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

function App() {
 //guarda los clics de cada boton en su propio estado
    const [good,setGood] = useState(0);
    const [neutral,setNeutral] = useState(0);
    const [bad,setbad] = useState(0);

    const setToBad = newBad =>{
        setbad(newBad);
    }

    const setToGood = newGood =>{
        setGood(newGood);
    }

    const setToNeutral = newNeutral =>{
        setNeutral(newNeutral);
    }


  return (
    <div>
        <h1>Give feedback</h1>
        <Button handleClick={()=>setToGood(good +1)} text='Good' />
        <Button handleClick={()=>setToNeutral(neutral +1)} text='Neutral' />
        <Button handleClick={()=>setToBad(bad +1)} text="Bad" />
        <h2>Statistics</h2>
        Good: {good}<br/>
        Neutral: {neutral}<br/>
        Bad: {bad}
    </div>
  )
}

export default App
