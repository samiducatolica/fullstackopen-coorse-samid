<<<<<<< HEAD
import {useState} from 'react'

//Este el el lugar para definir componentes

const Display = props => <div>{props.value}</div>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = () => {

    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log('value now', newValue)
        setValue(newValue)
    }

    //No definas componentes adentro de otro componente

    return (
        <div>
            <Display value={value} />
            <h2>Pasando controladores de eventos a componentes hijos</h2>
            <Button handleClick={() => setToValue(1000)} text="thousand" />
            <Button handleClick={() => setToValue(0)} text="reset" />
            <Button handleClick={() => setToValue(value +1)} text="increment" />

            <h2>Juramento de los programadores</h2>
            <p>Programar es difícil, por eso usaré todos los medios posibles para hacerlo más fácil.</p>
            <ul>
                <li>Tendre la consola de desarrollado de mi navegador abierta todo el tiempo</li>
                <li>Progreso con pequeños pasos.</li>
                <li>Escribiré muchas declaraciones console.log para asegurarme de que entiendo cómo se comporta el código y para ayudar a identificar problemas</li>
                <li>Si mi código no funciona, no escribiré más código. En lugar de eso, empiezo a eliminar el código hata que funcione o simplemente vuelvo a un estado en el que todo seguía funcionando.</li>
                <li>Cuando pido ayuda en el canal de Discord del curso o en otro lugar, formulo mis preguntas correctamente.</li>
            </ul>

        </div>
    )
=======
const  Hello = (props) => {
    console.log (props)
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old.
            </p>
        </div>
    )
}

const  Footer= () =>{
    return (
        <div>
            greating app created by <a href='https://github.com/mluukkay'>mluukkay</a>

        </div>
    )
}
const  App = () => {
    const  friends=[
        { name :'Peter', age: 12 },
        {name:'Maya', age :13},
    ]

  return (
      <div>
          <p>{friends[0].name} {friends[0].age}</p>
          <p>{friends[1].name} {friends[1].age}</p>
      </div>
  )
>>>>>>> refs/heads/main
}
export default App
