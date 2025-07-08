import {useState} from 'react'

const Hello = ({name, age}) => {

    const bornYear = () => {
        const yearNow = new Date().getFullYear();
        return yearNow - age
    }

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old.
            </p>
            <p>
                So you were probably born in {bornYear()}
            </p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greating app created by <a href='https://github.com/mluukkay'>mluukkay</a>

        </div>
    )
}
const App = () => {
    const [counter, setCounter] = useState(0)

    setTimeout(() => {
        setCounter(counter + 1)
    },1000)

    console.log('rendering...',counter)

    return (
        <div>
            {counter}
        </div>
    )
}
export default App
