import {useState} from "react";

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)
const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td><td>{props.value}{props.medida}</td>
        </tr>
    )
}
const Statistics = (props) => {

    if (props.total === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                No feedback given
            </div>)
    }
    return (
        <div>
            <h2>Statistics</h2>
            <table>
                <tbody>
                <StatisticLine text='Good' value={props.good}/>
                <StatisticLine text='Neutral' value={props.neutral}/>
                <StatisticLine text='Bad' value={props.bad}/>
                <StatisticLine text='All' value={props.total}/>
                <StatisticLine text='Average' value={props.stadisticsAverage}/>
                <StatisticLine text='Positive' value={props.stadisticsPositive} medida=' %'/>
                </tbody>
            </table>
        </div>
    )
}


function App() {
    //guarda los clics de cada boton en su propio estado
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setbad] = useState(0);
    const [total, setTotal] = useState(0);
    const [positiveAvrg, setPositiveAvrg] = useState(0);
    const [average, setAverage] = useState(0);

    const incrementBad = () => {
        const newBad = bad + 1
        const newTotal = total + 1
        setbad(newBad)
        setTotal(newTotal)
        setPositiveAvrg((100 * good)/newTotal)
        setAverage((good-newBad )/ newTotal)
        console.log('good:',good, 'neutral:', neutral, 'bad:', newBad, 'total:', newTotal)
    }

    const incrementGood =() => {
        const newGood = good + 1
        const newTotal = total + 1
        setGood(newGood)
        setTotal(newTotal)
        setPositiveAvrg((100 * newGood)/newTotal)
        setAverage((newGood-bad) /newTotal)
        console.log('good:',newGood, 'neutral:', neutral, 'bad:', bad, 'total:', newTotal)
    }

    const incrementNeutral = () => {
        const newNeutral = neutral + 1
        const newTotal = total + 1
        setNeutral(newNeutral)
        setTotal(newTotal)
        setPositiveAvrg((100 * good)/newTotal)
        setAverage((good-bad)/newTotal)
        console.log('good:',good, 'neutral:', newNeutral, 'bad:', bad, 'total:', newTotal)
    }



    return (
        <div>
            <h1>Give feedback</h1>
            <Button handleClick={incrementGood} text='Good'/>
            <Button handleClick={incrementNeutral} text='Neutral'/>
            <Button handleClick={incrementBad} text="Bad"/>
            <Statistics good={good} neutral={neutral} bad={bad}
                        total={total}
                        stadisticsAverage={average}
                        stadisticsPositive={positiveAvrg}
            />

        </div>
    )
}

export default App
